var alarmName = 'alarm1';

function checkAlarm(callback) {

}

function createAlarm() {

  chrome.alarms.create(alarmName, {
    delayInMinutes: 5,
    periodInMinutes: 5
  });
}

function cancelAlarm() {
  chrome.alarms.clear(alarmName);
}

function moveAlarm() {
  chrome.alarms.getAll(function (alarms) {
    var hasAlarm = alarms.some(function (a) {
      return a.name == alarmName;
    });
    if (hasAlarm) {
      chrome.alarms.clearAll()
      cancelAlarm();
      console.log('h1')
      createAlarm();
    } else {
      console.log('h2')
      createAlarm();

    }
  })

}
chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
    cancelAlarm();
    moveAlarm();

  }else if(details.reason == "update"){
    cancelAlarm();

    moveAlarm();

  }
});
let token = '';







moveAlarm();
