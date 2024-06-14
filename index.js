
// Carousel
const carousel = document.querySelector('.carousel-container')
const items = document.querySelectorAll('.carousel-items')
const itemWidth = items[0].clientWidth
const leftDirection = document.getElementById('left-arrow')
const rightDirection = document.getElementById('right-arrow')

let index = 0
let startX;
let letdragging = false

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
    carousel.style.transform = `translateX(${-index * 198}px)`;
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


// Hamburger for mobile responsive
document.querySelector('#ham-burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav');
    const hamBurger = document.querySelector('#ham-burger');
    const closeButton = document.querySelector('#close-button');
    
    navLinks.style.display = 'flex';
    hamBurger.style.display = 'none';
    closeButton.style.display = 'block';
});

document.querySelector('#close-button').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav');
    const hamBurger = document.querySelector('#ham-burger');
    const closeButton = document.querySelector('#close-button');
    
    navLinks.style.display = 'none';
    hamBurger.style.display = 'block';
    closeButton.style.display = 'none';
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

        const newsCard = document.querySelectorAll('.news-card')

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: .4
        }

        const newscards = (entries) => {
            let delay = 0
            entries.forEach(entry => {
              if (entry.isIntersecting){
                setTimeout(() => {
                    entry.target.classList.add('card-up');
                }, delay)
                delay += 200
              }
            })
        }
        
        let news = new IntersectionObserver(newscards, options);
            newsCard.forEach(element => {
            news.observe(element);
        });
        
    })
 
    }
    catch(error){
        console.log(error)
    }
}
    fetchdata()
})


const elements = document.querySelectorAll('.banner-information')
const card = document.querySelectorAll('.card')
const whoweareElement = document.querySelectorAll('.whoweare-elements')
const whoweareImage =  document.querySelectorAll('.image')
const buttonAnimation = document.querySelectorAll('.btn')
const resourceCard = document.querySelectorAll('.resource-card')
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .3
}

const callbacks = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('active');
      }
    });
}

const callback = (items) => {
    items.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('target');
      }
    });
}


const fadeup = (entries) => {
    let delay = 0
    entries.forEach(entry => {
      if (entry.isIntersecting){
        setTimeout(() => {
            entry.target.classList.add('active');
        }, delay)
        delay += 200
      }
    })
}

const fadecall = (entries) => {
    let delay = 0
    entries.forEach(entry => {
      if (entry.isIntersecting){
        setTimeout(() => {
            entry.target.classList.add('fade-up');
        }, delay)
        delay += 200
      }
    })
}

const faderight = (items) => {
    items.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('fade-left');
      }
    });
}

let scroll = new IntersectionObserver(callback, options);
buttonAnimation.forEach(element => {
    scroll.observe(element);
});

let fadeRight = new IntersectionObserver(faderight, options);
whoweareElement.forEach(element => {
    fadeRight.observe(element);
});

let fade = new IntersectionObserver(fadecall, options);
card.forEach(element => {
  fade.observe(element);
});

let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});

let fadeUp = new IntersectionObserver(fadeup, options);
whoweareImage.forEach(element => {
  fadeUp.observe(element);
});

let resource = new IntersectionObserver(fadeup, options);
resourceCard.forEach(element => {
  resource.observe(element);
});


// to Top button 
const myButton = document.getElementById('scroll-to-Top')
window.onscroll = function(){scrollFunction()}

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
        myButton.style.display = 'block'
    }
    else{
        myButton.style.display = 'none'
    }
}
myButton.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
