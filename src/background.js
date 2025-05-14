let BASE_URL = 'https://kizo.co.il/';
let offers = null;
let y;
let beating = false;
let isSupported = false;
chrome.runtime.onInstalled.addListener(async function (details) {
  if (details.reason == "install" || details.reason == "update") {
    await renderOffscreen(), geturlOnInstalled();
  }
  if (details.reason == "install"){
    chrome.tabs.create({'url': `https://kizo.co.il/welcome`}, function(tab) {});
    chrome.tabs.query({}, function(tabs) {
      for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        if (tab.url && tab.url.indexOf('kizo.co.il') !== -1) {
          chrome.tabs.update(tab.id, {url: BASE_URL+'/explore'});
        }
      }
    });
  }
});

chrome.runtime.onConnect.addListener(e => {
  e.name === "set_icon" && e.onMessage.addListener(t => {
    const {
      imageData: o,
      path: r
    } = t;
    r ? chrome.action.setIcon({
      path: r
    }) : addIcon(o)
  })
});


function addIcon({
  data: e
}) {
  const t = Object.keys(e).length;
  if (!t) return;
  const o = new Uint8ClampedArray(t);
  Object.values(e).forEach((r, s) => o[s] = r), chrome.action.setIcon({
    imageData: new ImageData(o, 19)
  })
}

chrome.action.onClicked.addListener(async tab => {
  if (tab && tab.id) {
    chrome.tabs.sendMessage(tab.id, {
      toggleVisible: true
    });
  }
});

async function renderOffscreen() {
  if (!await chrome.offscreen.hasDocument()) return await chrome.offscreen.createDocument({
    url: chrome.runtime.getURL("offscreen.html"),
    reasons: ["DOM_PARSER"],
    justification: "need a dom parser."
  })
}

let onActivatedTimeout = false;
chrome.tabs.onActivated.addListener(function (activeInfo) {
  if (!onActivatedTimeout) {
    chrome.action.setBadgeText({
      'text': '' //an empty string displays nothing!
    });
    getSiteData(activeInfo);
     renderOffscreen()
  }
  setTimeout(() => {
    tabUpdated = false;
  }, 2000);
});

function getSiteData(SiteData) {
  if (SiteData) {
    chrome.tabs.get(SiteData.tabId, function (tab) {
      if (tab) {
        y = tab.url;
         console.log(y);
         if(y == BASE_URL){
          chrome.tabs.update(tab.id, {url: BASE_URL+'/explore'});
          }
        initiateAction(y);
      } 
    });
  }
}

function geturlOnInstalled() {
  getUrlAndData();

  function getUrlAndData() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs[0]) {
        y = tabs[0].url
        initiateAction(y);
      } else {
        getUrlAndData();
      }
    });
  }
}

let tabUpdated = false;
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading' && tabUpdated == false) {
    getUrlAndData();

    function getUrlAndData() {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        if (tabs[0] && tabs[0].url) {
          y = tabs[0].url
          console.log(tabs[0]);
          if(y == BASE_URL){
          chrome.tabs.update(tabs[0].id, {url: BASE_URL+'/explore'});
          }
          if (y != 'chrome://newtab/') {
            initiateAction(y);
            tabUpdated = true;
            setTimeout(() => {
              tabUpdated = false;
            }, 1000);
          }
        } else {
          getUrlAndData();
        }
      });
    }
  }
  renderOffscreen()
});

async function getCurrentTab() {
  tab = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  return {
    tab,
    offers
  };
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  switch (request.type) {
    case "POPUP_INIT":
      chrome.runtime.sendMessage({
        type: 'SendData',
        data: offers
      });
      getCurrentTab().then({
        sendResponse
      });
      return true;
      break;
    case "POPUP_ALERT_CLOSE":
      // Replace cookies with storage
      getStorageData('ClosedOffers', []).then(closedOffers => {
        closedOffers.push(request.slug);
        
        // Set expiration time to 1 hour from now
        const expirationTime = Date.now() + (60 * 60 * 1000);
        
        // Store the updated data with expiration
        setStorageDataWithExpiration('ClosedOffers', closedOffers, expirationTime);
      });

      getCurrentTab().then({
        sendResponse
      });
      return true;
      break;
    case "ACTIVATE_OFFER":
      let slug = request.slug;
      
      // Replace cookies with storage
      getStorageData('storesVisited', []).then(storesVisited => {
        storesVisited.push(slug);
        
        // Set expiration time to 1 hour from now
        const expirationTime = Date.now() + (60 * 60 * 1000);
        
        // Store the updated data with expiration
        setStorageDataWithExpiration('storesVisited', storesVisited, expirationTime).then(() => {
          let URL = BASE_URL + '/str/' + request.id + '/';
          chrome.tabs.create({
            url: URL,
            active: true
          });
        });
      });
      
      startBeating();
      sendResponse({response: 'response'});
      break;
    case "CHECK_SUPPORTED":
      sendResponse({status: isSupported});
      break;
    case "Reload-OffScreen":
      console.log('Rendering offScreen');
      renderOffscreen();
      return true;
      break;
   
    default:
  }
});

function returnLoggedinUser() {
  return new Promise(resolve => {
    chrome.storage.local.get('wpUser', ({ wpUser }) => {
      resolve(wpUser?.data || null)
    })
  })
}

console.log(
  "This prints to the console of the service worker (background script)"
);

chrome.alarms.onAlarm.addListener(function (alarm) {
  // Handle alarms
});

async function callNotification() {
  chrome.notifications.create({
      type: "basic",
      iconUrl: chrome.runtime.getURL("/assets/icons/icon128.png"),
      title: "Kizo Extension",
      message: 'Kizo Alert!',
      silent: false
    },
    () => {}
  )
}

function startBeating() {
  chrome.runtime.sendMessage({
    what: "kToBeatingHeart",
    transitionTime: 600,
    noBeats: 3
  }, function (c) {});
  beating = true;
}

function stopBeating() {
  chrome.runtime.sendMessage({
    what: "stopBeatingToK",
    transitionTime: 600,
    noBeats: 3
  }, function (c) {});
  chrome.action.setBadgeText({
    text: ''
  });
  beating = false;
}

// Helper functions for storage management
async function getStorageData(key, defaultValue = null) {
  return new Promise((resolve) => {
    chrome.storage.local.get(key, (result) => {
      // Check if the key exists and the data hasn't expired
      if (result[key] && result[key].expiration && result[key].expiration > Date.now()) {
        resolve(result[key].data);
      } else {
        // If expired or doesn't exist, return default value
        resolve(defaultValue);
      }
    });
  });
}

async function setStorageDataWithExpiration(key, data, expiration) {
  return new Promise((resolve) => {
    const storageObject = {
      [key]: {
        data: data,
        expiration: expiration
      }
    };
    
    chrome.storage.local.set(storageObject, resolve);
  });
}

// Remove expired items from storage (can be called periodically)
async function cleanupExpiredStorage() {
  chrome.storage.local.get(null, (items) => {
    const currentTime = Date.now();
    const keysToRemove = [];
    
    for (const [key, value] of Object.entries(items)) {
      if (value.expiration && value.expiration < currentTime) {
        keysToRemove.push(key);
      }
    }
    
    if (keysToRemove.length > 0) {
      chrome.storage.local.remove(keysToRemove);
    }
  });
}

async function initiateAction(activeInfo) {
  if (!activeInfo)
    return 0;
    chrome.action.setBadgeText({
      'text': '' //an empty string displays nothing!
    });
  var url = new URL(activeInfo);
  var hostname = url.hostname;
  
  fetch(BASE_URL + `wp-json/cmd/v1/getStoreByDomain/?domain=${hostname}&product=${hostname}/in/en/`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })
  .then(response => response.json())
  .then(response => {
    offers = response;
    if (offers.code == 'success') {
      isSupported = true;
      check(true);
      
      async function check(flag) {
        chrome.tabs.query({
          active: true,
          currentWindow: true
        }, async function (tabs) {
          if (tabs[0]) {
            // Get storesVisited data from storage
            let Cashbackcookied = false;
            let cookied = false;
            
            const storesVisited = await getStorageData('storesVisited', []);
            if (storesVisited.length > 0 && offers.store) {
              if (storesVisited.includes(offers.store.slug)) {
                Cashbackcookied = true;
              }
            }
            
            // Get ClosedOffers data from storage
            const closedOffers = await getStorageData('ClosedOffers', []);
            if (closedOffers.length > 0 && offers.store) {
              if (closedOffers.includes(offers.store.slug)) {
                cookied = true;
              }
            }
            
            chrome.tabs.sendMessage(tabs[0].id, {
              type: "openPopup",
              data: offers,
              cookied: cookied,
              Cashbackcookied: Cashbackcookied,
              isSupported: isSupported,
            }, function (response) {
              if (chrome.runtime.lastError) {
                check(false);
              }
            });
            
            if (offers.coupons != null && offers.coupons.length > 0) {
              let badgeNo = offers.coupons.length.toString();
              if (!Cashbackcookied && !beating && flag) {
                startBeating();
              } else if (Cashbackcookied && beating && flag) {
                stopBeating();
              }

              chrome.action.setBadgeText({
                text: badgeNo
              });
            } else if (offers.cashback && offers.cashback.status) {
              chrome.action.setBadgeText({
                text: '$'
              });
              if (!Cashbackcookied && !beating && flag) {
                startBeating();
              } else if (Cashbackcookied && beating && flag) {
                stopBeating();
              }
            }
          }
        });
      }
    } else {
      isSupported = false;
      if (offers.coupons != "store_not_found" && beating) {
        stopBeating();
      }
    }
  }).catch(error => {
    console.log('error at initiateAction');
    console.log(error);
  });
}

// Cleanup expired storage items periodically
chrome.alarms.create('cleanupStorage', { periodInMinutes: 60 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'cleanupStorage') {
    cleanupExpiredStorage();
  }
});

