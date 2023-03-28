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
const likes = document.querySelector('.likes');
heartButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.target;
    likes.innerHTML = count;
})

plusButton.disabled = false;
minusButton.disabled = false;
heartButton.disabled = false;
const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', function (event) {
  if (pauseButton.innerText === 'pause') {
    clearInterval(intervalID);
    pauseButton.innerHTML = 'resume';
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
  } else {
    count = parseInt(document.getElementById('counter').innerHTML);
    intervalID = setInterval(function() {
      count++; 
      document.getElementById('counter').innerHTML = count; 
    }, 1000);
    pauseButton.innerHTML = 'pause';
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
  } 
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
    handleComment(event.target.comment_input.value)
  }); 
});

function handleComment(comment) {
  let p = document.createElement('p');
  p.textContent = comment;
  document.querySelector('#list').appendChild(p);
};
