let count = document.getElementById('counter').innerText; 
let intervalID = setInterval(function() {
  count++; 
  document.getElementById('counter').innerHTML = count; 
}, 1000);

const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', function (event) {
    event.target; 
    count--;
    document.getElementById('counter').innerHTML = count;
})

const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', function (event) {
    event.target; 
    count++;
    document.getElementById('counter').innerHTML = count;
})

const heartButton = document.getElementById('heart');
const likes = document.getElementsByClassName('likes');
heartButton.addEventListener('click', function (event) {
    event.target;
    likes.innerText = count
})


const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', function (event) {
  if (pauseButton.innerText === 'pause') {
    clearInterval(intervalID);
    pauseButton.innerHTML = 'resume';
  } else {
    count = parseInt(document.getElementById('counter').innerHTML);
    intervalID = setInterval(function() {
      count++; 
      document.getElementById('counter').innerHTML = count; 
    }, 1000);
    pauseButton.innerHTML = 'pause';
  } 
});