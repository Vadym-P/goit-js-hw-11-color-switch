const colors = [
    '#FFFFFF', 
    '#2196F3', 
    '#4CAF50', 
    '#FF9800', 
    '#009688', 
    '#795548'
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtnClick() {
    intervalId = setInterval(() => {
    let valueArr = randomIntegerFromInterval(0, colors.length - 1);
    const randomBodyColor = colors[valueArr];
    document.body.style.backgroundColor = randomBodyColor;
  }, 1000);
  refs.startBtn.setAttribute('disabled', true);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled');
}
