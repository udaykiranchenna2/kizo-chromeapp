chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.runtime.sendMessage(
    { type: "Reload-OffScreen" },
  );
  const { what, transitionTime } = request;
  switch (what) {
    case "animate":
      animation.animateIt("heart.png");
  sendResponse(true);
      break;
    case "backToLogo":
      animation.backToStatic("onemanarmy.png");
  sendResponse(true);
      break;
    case "stopBeating":
      animation.stopBeating();
  sendResponse(true);
      break;
    case "kToBeatingHeart":
      animation.kToBeatingHeart("#46b29d", "#f55d42", transitionTime);
  sendResponse(true);
      break;
    case "stopBeatingToK":
      animation.stopBeatingToK("#f55d42", "#46b29d", transitionTime);
  sendResponse(true);
      break;
  }
});

class IconAnimator {
  constructor(strPath, fromPathStr, toPathStr, callbackfunction) {
    this.strPath = strPath;
    this.canvas = document.createElement("canvas");
    this.icon = document.createElement("img");
    this.fromPathStr = fromPathStr;
    this.toPathStr = toPathStr;
    this.icon.setAttribute("src", this.strPath);
    this.canvas.setAttribute("width", "19");
    this.canvas.setAttribute("height", "19");
    this.canvasContext = this.canvas.getContext("2d", {
      willReadFrequently: true,
    });

    this.time = 0;
    this.beatingScale = 1;
    this.samplingRate = 360;
    this.pointsArrayFrom = [];
    this.pointsArrayTo = [];
    this.xValuesFrom = [];
    this.yValuesFrom = [];
    this.xValuesTo = [];
    this.yValuesTo = [];
    this.xVectors = [];
    this.yVectors = [];
    this.xSteps = [];
    this.ySteps = [];
    this.isDefaultAnimRunning = 0;
    this.isBeatingAnimRunning = 0;
    this.isBeating = 0;
    this.callbackfunction = callbackfunction;

    // Add visibility change listener
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.beatingScale = 1;
        this.drawCanvas();
      }
    });
  }

  set() {
    this.callbackfunction({ path: { 19: this.strPath } });
  }

  drawIconAtRotation(rotation) {
    this.canvasContext.save();
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvasContext.translate(
      Math.ceil(this.canvas.width / 2),
      Math.ceil(this.canvas.height / 2)
    );

    this.canvasContext.scale(rotation, 1);

    if (rotation > 0)
      this.canvasContext.drawImage(
        newIcon,
        -Math.ceil(this.canvas.width / 2),
        -Math.ceil(this.canvas.height / 2),
        this.canvas.width,
        this.canvas.height
      );
    else
      this.canvasContext.drawImage(
        icon,
        -Math.ceil(this.canvas.width / 2),
        -Math.ceil(this.canvas.height / 2),
        this.canvas.width,
        this.canvas.height
      );

    this.canvasContext.restore();
    this.callbackfunction({
      imageData: this.canvasContext.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      ),
    });
  }

  backToStatic(icon) {
    let rotation = -1;
    let animationFrames = 35;
    let animationSpeed = 7;
    let i = 0;

    let newIcon = document.createElement("img");
    newIcon.setAttribute("src", icon);

    function Do() {
      rotation += 1 / animationFrames;
      //console.log(i + " - " +rotation);
      this.drawIconAtRotation(rotation);
      i++;
      if (rotation <= 1) {
        setTimeout(Do, animationSpeed);
      } else {
        rotation = -1;
        this.callbackfunction({ path: { 19: newIcon.src } });
        icon = newIcon;
      }
    }
    Do();
  }

  animateIt(icon) {
    const rotation = -1;
    const animationFrames = 35;
    const animationSpeed = 7;
    const i = 0;

    const newIcon = document.createElement("img");
    newIcon.setAttribute("src", icon);

    function Do() {
      rotation += 1 / animationFrames;
      this.drawIconAtRotation(rotation);
      i++;
      if (rotation <= 1) {
        setTimeout(Do, animationSpeed);
      } else {
        rotation = -1;
        this.callbackfunction({ path: { 19: newIcon.src } });
        icon = newIcon;
      }
    }
    Do();
  }

  drawCanvas() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvasContext.translate(
      ((1 - this.beatingScale) * this.canvas.width) / 2,
      ((1 - this.beatingScale) * this.canvas.height) / 2
    );
    this.canvasContext.scale(this.beatingScale, this.beatingScale);
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.xValuesTo[0], this.yValuesTo[0]);
    for (let i = 1; i < this.samplingRate; i++) {
      this.canvasContext.lineTo(this.xValuesTo[i], this.yValuesTo[i]);
    }
    this.canvasContext.closePath();
    this.canvasContext.fill();
    this.callbackfunction({
      imageData: this.canvasContext.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      ),
    });
    this.canvasContext.resetTransform();
  }

  beatingAnim(noBeats) {
    let step = 1;
    let beatingRange = 0.2; /*beating range 1-0(1 no movement, 0 beat until image is 0 size and then bounce back)*/
    let beatingVector = -1;
    let beatingTime = 500; /*time in milisecond for a single beat*/

    let noSteps = Math.ceil(beatingTime / 40);
    let totalNoSteps = noSteps * 2 * noBeats;
    let beatStep = beatingRange / noSteps;

    // Reset state before starting new animation
    this.isBeating = 1;
    this.beatingScale = 1;
    this.drawCanvas(); // Draw initial state

    let animation = setInterval(() => {
      // Check if animation should continue
      if (!this.isBeating) {
        clearInterval(animation);
        this.beatingScale = 1;
        this.drawCanvas();
        return;
      }

      this.beatingScale = this.beatingScale + beatStep * beatingVector;
      step++;
      
      if (step % noSteps == 0) {
        beatingVector = beatingVector * -1;
      }
      
      this.drawCanvas();
      
      if (step >= totalNoSteps && totalNoSteps > 0) {
        this.isBeating = 0;
        this.beatingScale = 1;
        this.drawCanvas();
      }
      
      if (this.isBeating == 0 && step % noSteps == 0) {
        clearInterval(animation);
        this.beatingScale = 1;
        this.drawCanvas();
      }
    }, 40);
  }

  stopBeating() {
    this.isBeating = 0;
    this.beatingScale = 1;
    this.drawCanvas();
  }

  morphShape(fromPathStr, toPathStr, fromColor, toColor, transitionTime) {
    let fromPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    let toPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    fromPath.setAttribute("d", fromPathStr);
    toPath.setAttribute("d",  toPathStr);

    let beginningLength = 0;
    let lengthPerSampleFrom = fromPath.getTotalLength() / this.samplingRate;
    let lengthPerSampleTo = toPath.getTotalLength() / this.samplingRate;

    this.samplingRate = 360; /*quality of the morph and the final shape (higher number - better quality but more resource intensive)*/
    this.pointsArrayFrom = [];
    this.pointsArrayTo = [];
    this.xValuesFrom = [];
    this.yValuesFrom = [];
    this.xValuesTo = [];
    this.yValuesTo = [];
    this.xVectors = [];
    this.yVectors = [];
    this.xSteps = [];
    this.ySteps = [];

    let timeStep = 40;
    let counter = 0;
    let endCounter = transitionTime / timeStep;

    for (let i = 0; i < this.samplingRate; i++) {
      this.pointsArrayFrom.push(
        fromPath.getPointAtLength(beginningLength + i * lengthPerSampleFrom)
      );
      this.pointsArrayTo.push(
        toPath.getPointAtLength(beginningLength + i * lengthPerSampleTo)
      );

      this.xValuesFrom.push(this.pointsArrayFrom[i].x);
      this.yValuesFrom.push(this.pointsArrayFrom[i].y);
      this.xValuesTo.push(this.pointsArrayTo[i].x);
      this.yValuesTo.push(this.pointsArrayTo[i].y);
    }

    let maxXFrom = Math.max(...this.xValuesFrom);
    let minXFrom = Math.min(...this.xValuesFrom);
    let maxXTo = Math.max(...this.xValuesTo);
    let minXTo = Math.min(...this.xValuesTo);

    let fromScaling = 19 / (maxXFrom - minXFrom);
    let toScaling = 19 / (maxXTo - minXTo);

    this.xValuesFrom = this.xValuesFrom.map((val) => val * fromScaling);

    this.yValuesFrom = this.yValuesFrom.map((val) => val * fromScaling);

    this.xValuesTo = this.xValuesTo.map((val) => val * toScaling);

    this.yValuesTo = this.yValuesTo.map((val) => val * toScaling);

    for (let i = 0; i < this.samplingRate; i++) {
      this.xVectors.push(this.xValuesTo[i] - this.xValuesFrom[i]);
      this.yVectors.push(this.yValuesTo[i] - this.yValuesFrom[i]);

      this.xSteps.push(this.xVectors[i] / endCounter);
      this.ySteps.push(this.yVectors[i] / endCounter);
    }

    let fromR = parseInt(fromColor.substring(1, 3), 16);
    let fromG = parseInt(fromColor.substring(3, 5), 16);
    let fromB = parseInt(fromColor.substring(5, 7), 16);
    let toR = parseInt(toColor.substring(1, 3), 16);
    let toG = parseInt(toColor.substring(3, 5), 16);
    let toB = parseInt(toColor.substring(5, 7), 16);

    let rStep = (toR - fromR) / endCounter;
    let gStep = (toG - fromG) / endCounter;
    let bStep = (toB - fromB) / endCounter;

    let animation = setInterval(() => {
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvasContext.fillStyle =
        "rgb(" +
        (fromR + rStep * counter) +
        "," +
        (fromG + gStep * counter) +
        "," +
        (fromB + bStep * counter) +
        ")";
      this.canvasContext.beginPath();
      this.canvasContext.moveTo(
        this.xValuesFrom[0] + this.xSteps[0] * counter,
        this.yValuesFrom[0] + this.ySteps[0] * counter
      );
      for (let i = 1; i < this.samplingRate; i++) {
        this.canvasContext.lineTo(
          this.xValuesFrom[i] + this.xSteps[i] * counter,
          this.yValuesFrom[i] + this.ySteps[i] * counter
        );
      }
      this.canvasContext.closePath();
      this.canvasContext.fill();
      this.callbackfunction({
        imageData: this.canvasContext.getImageData(
          0,
          0,
          this.canvas.width,
          this.canvas.height
        ),
      });
      counter++;
      if (counter > endCounter) {
        clearInterval(animation);
      }
    }, timeStep);
  }

  kToBeatingHeart(fromColor, toColor, transitionTime) {
    this.isDefaultAnimRunning = 1;
    this.morphShape(this.fromPathStr, this.toPathStr, fromColor, toColor, transitionTime);
    setTimeout(() => {
      this.beatingAnim(-1);
      this.isDefaultAnimRunning = 0;
      this.isBeatingAnimRunning = 1;
    }, transitionTime);
  }

  stopBeatingToK(fromColor, toColor, transitionTime) {
    this.stopBeating();
    setTimeout(() => {
      this.morphShape(this.toPathStr, this.fromPathStr, fromColor, toColor, transitionTime);
    }, 500);
  }
}

const fromPathStr =
  "m 274.00208,306.23647 c -21.04163,-4.70346 -39.23782,-18.33483 -62.59742,-46.89381 -23.66026,-28.92658 -91.27569,-109.52317 -93.73859,-111.73502 -1.80964,-1.62519 -3.12169,-1.98241 -4.21383,-1.1473 -8.25215,6.3101 -42.148596,34.46012 -44.085946,36.6121 -2.35226,2.61284 -2.53694,5.01672 -3.125,40.67563 0.06789,11.04439 0.258238,12.89534 -0.418422,35.72789 -1.578904,7.98001 -11.048645,12.18849 -24.832006,12.36202 -13.192594,-0.005 -17.913975,-1.92437 -22.256328,-9.0464 -2.431233,-3.98754 -2.484001,-6.52837 -2.488574,-119.82657 0.461261,-52.672073 -1.479743,-93.816703 0.559874,-116.969543 2.99187,-8.93842 11.9881,-11.64937 25.060426,-11.64619 12.786739,0.003 17.576165,1.98273 21.881753,9.04446 2.36672,3.88173 2.48412,6.38431 2.48857,53.04714 0.004,43.321083 0.23664,49.205173 2.01449,50.983033 2.44669,2.44669 -1.79594,5.48883 50.490193,-36.203553 62.19633,-49.59468 93.90761,-74.50978 98.04628,-77.03357 2.72573,-1.66217 6.23179,-2.33613 12.1703,-2.33946 7.07464,-0.004 8.90484,0.46926 12.04992,3.11568 5.40846,4.55091 8.11608,12.06667 6.50398,18.05356 -1.77288,6.58403 -4.65552,9.86626 -17.23161,19.62032 -35.7674,27.74134 -69.96276,54.872833 -71.85137,57.008773 -4.99125,5.64488 -6.79108,2.98598 44.43007,65.63716 20.09291,24.57666 45.90928,56.27852 57.3697,70.4486 11.46041,14.17006 23.81765,28.37105 27.46051,31.55774 11.44402,10.01093 30.18348,18.3035 41.36212,18.3035 4.5406,0 4.83045,0.2194 4.46062,3.37637 -0.27084,2.31204 -1.77466,4.18373 -4.77052,5.9375 -3.8863,2.27504 -6.74872,2.59054 -25.625,2.82448 -14.58542,0.18076 -23.71644,-0.28798 -29.11422,-1.49454 z";

const toPathStr =
  "M 163.99389,273.73724 C 149.27528,269.8503 129.27913,261.00057 101.40466,237.91408 80.153182,220.31296 80.486119,217.31949 78.023219,215.10764 c -1.80964,-1.62519 -6.70033,-6.05784 -9.48169,-8.6473 -3.30226,-3.07443 -4.84559,-5.41851 -7.03238,-7.31648 -1.95684,-1.69839 -4.35866,-4.72117 -7.41071,-7.36008 -4.05008,-3.90779 -4.53826,-4.71048 -8.88525,-8.86715 -5.68604,-5.05571 -6.86753,-6.60933 -12.07947,-12.15008 C 21.905419,158.5294 20.793329,157.49751 16.591682,150.29158 6.3597756,132.74357 4.5803926,124.06241 3.2735176,108.28479 3.0335366,89.740023 4.4777886,82.185373 5.7597916,75.068703 c 2.902584,-11.02634 6.5581664,-18.79034 13.8373474,-28.49363 7.94217,-10.58706 18.509,-22.1756 26.75177,-27.41629 16.04144,-10.1990201 40.437,-21.8333901 74.173401,-14.1464701 34.15002,7.7811601 43.62949,22.9551701 45.40734,24.7330301 2.44669,2.44669 4.00242,1.26011 5.93663,-0.48927 11.509,-10.40919 14.11261,-11.87807 18.24324,-14.415 12.57472,-7.7230901 31.66944,-11.5330501 45.18409,-11.5354401 9.85256,-0.002 26.88901,2.01665 30.89619,2.93185 8.97989,2.05091 17.74383,5.8408301 30.0736,16.0945301 8.71315,7.24605 18.56327,14.7075 27.03436,31.52551 8.69285,17.25828 16.2035,37.01015 10.16224,62.398727 -3.7607,15.80446 -2.93629,26.75877 -34.91533,62.54723 -20.41915,22.85153 -33.02637,34.7152 -46.79718,46.5349 -8.90512,7.6434 -10.26879,9.51837 -17.62615,15.29319 -4.34361,3.40931 -7.04635,5.25536 -11.62129,8.74544 -3.47845,2.6536 -6.0228,3.80352 -7.78159,4.94018 -1.95509,1.26353 -7.09662,4.45317 -11.02949,6.861 -2.53789,1.55377 -4.90608,3.34067 -15.86485,7.13186 -7.35961,2.54606 -9.57366,4.37868 -17.75064,5.78356 -2.85983,0.49135 -3.03452,0.44779 -6.07959,-0.35637 z";

var animation = new IconAnimator(
  "onemanarmy.png",
  fromPathStr,
  toPathStr,
  (data) => {
    let port = chrome.runtime.connect({ name: "set_icon" });
    port.postMessage(data);
  }
);

animation.set();
