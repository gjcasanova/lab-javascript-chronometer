const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const secondsStr = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  const minutesStr = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  printSeconds(secondsStr);
  printMinutes(minutesStr);
}

function printMinutes(minutesStr) {
  minDecElement.innerHTML = minutesStr[0];
  minUniElement.innerHTML = minutesStr[1];
}

function printSeconds(secondsStr) {
  secDecElement.innerHTML = secondsStr[0];
  secUniElement.innerHTML = secondsStr[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.split();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnLeftElement.innerText = 'START';
  btnRightElement.innerText = 'RESET';
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnLeftElement.innerText = 'STOP';
  btnRightElement.innerText = 'SPLIT';
}

function setResetBtn() {
  chronometer.reset();
  clearSplits();
  printTime();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
