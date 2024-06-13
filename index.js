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
  if (event.target == model) {
    model.style.display = "none";
  }
}



document.querySelector('.ham-burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});


// Fetch json data

document.addEventListener("DOMContentLoaded", () => {
    const parentelement = document.getElementById('news-cards');

    if (!parentelement) {
        console.error('No element with class "news-card-container" found.');
        return;
    }

const fetchdata = async () => {
    try{
        const response = await fetch('data.json')
        const data = await response.json()

        data.news.map(items => {
                  
        const newsDiv = document.createElement('div')
        newsDiv.className = 'news-card'

        const newsImageDiv = document.createElement('div')
        newsImageDiv.className = 'news-image'
        newsDiv.appendChild(newsImageDiv)

        const image = document.createElement('img')
        image.src = items.image
        image.alt =''
        newsImageDiv.appendChild(image)

        const infoContainer = document.createElement('div')
        infoContainer.className = 'info-container'

        const newsInformation = document.createElement('div')
        newsInformation.className = 'news-information'

        infoContainer.appendChild(newsInformation)

        const title = document.createElement('h1');
        title.textContent = items.title;

        const description = document.createElement('p')
        description.textContent =  items.content 
        newsInformation.appendChild(title)
        newsInformation.appendChild(description)

        const buttonDiv = document.createElement('div')
        buttonDiv.className = 'card-btn'
        const button = document.createElement('button')
        button.textContent = 'Learn more'
        const icon = document.createElement('i')
        icon.className = 'fa-solid fa-arrow-right'
        buttonDiv.appendChild(button)
        buttonDiv.appendChild(icon)

        infoContainer.appendChild(buttonDiv)
        
        newsDiv.appendChild(infoContainer);
        parentelement.appendChild(newsDiv);
    })
 
    }
    catch(error){
        console.log(error)
    }
}

fetchdata()

})
