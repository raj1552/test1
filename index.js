const carousel = document.querySelector('.carousel-container')
const items = document.querySelectorAll('.carousel-items')
const itemWidth = items[0].clientWidth
const leftDirection = document.getElementById('left-arrow')
const rightDirection = document.getElementById('right-arrow')

let index = 0
let startX;
let letdragging = false

let autoSlide = setInterval(rightDirection, 3000)

leftDirection.addEventListener('click', () => {
    if(index === 0){
        index = items.length - 5
    }
    else{
        index--
    }
    updateCarousel()
    resetAutoSlide()
})

rightDirection.addEventListener('click', () => {
    if(index === items.length - 5){
        index = 0
    }
    else{
        index++
    }
    updateCarousel()
    resetAutoSlide()
})

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * itemWidth}px)`;
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(rightDirection, 3000);
}


// Overlay on search bar

const model = document.getElementById('search-model')
const btn = document.getElementById('search-button')
const close = document.getElementsByClassName('close')[0]

btn.addEventListener('click', () => {
    model.style.display = 'block'
})

close.addEventListener('click', () => {
    model.style.display = 'none'
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    model.style.display = "none";
  }
}

