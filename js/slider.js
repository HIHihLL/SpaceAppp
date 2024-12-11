let pictures = document.querySelectorAll('.picture')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let currentIndex = 1

function addActive() {
    if(currentIndex > pictures.length) {
        currentIndex = 1
    }
    if(currentIndex < 1) {
        currentIndex = pictures.length
    }

    pictures[currentIndex-1].classList.add('active')
}


right.addEventListener('click', () => {
    pictures[currentIndex-1].classList.remove('active')
    currentIndex++;
    addActive();
  });
  
left.addEventListener('click', () => { 
    pictures[currentIndex-1].classList.remove('active')
    currentIndex--;
    addActive();
  });