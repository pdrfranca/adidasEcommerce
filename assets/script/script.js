const heartIcons = document.querySelectorAll('.fa-heart');
const slides = document.querySelector('#slide');
const slideWidth = slides.clientWidth;
let isPaused = false;
let intervalId;
let currentIndex = 0;

heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        icon.classList.toggle('fa-beat');
    });
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark');
  }
  
  function checkThemeOnLoad() {
    const body = document.body;
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDarkMode) {
      body.classList.add('dark');
    }
  }
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', toggleDarkMode);
  
window.addEventListener('load', checkThemeOnLoad);

function slideAnimation() {
  currentIndex++;
  if (currentIndex >= slides.children.length) {
    currentIndex = 0;
    slides.style.transition = 'none';
    slides.style.transform = 'translateX(0)';
  } else {
    slides.style.transition = 'transform 1s';
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.children.length - 1;
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
    } else {
      slides.style.transition = 'transform 1s';
      slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
}

function nextSlide() {
    slideAnimation();
}

function pauseSlide() {
    const pauseButton = document.getElementById('pauseButton');
    
    if (!isPaused) {
      clearInterval(intervalId);
      isPaused = true;
      pauseButton.classList.remove('fa-pause');
      pauseButton.classList.add('fa-play');
    } else {
      intervalId = setInterval(slideAnimation, 5000);
      isPaused = false;
      pauseButton.classList.remove('fa-play');
      pauseButton.classList.add('fa-pause');
    }
  }

  function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('open');
  }
  
  const hamburgerMenu = document.querySelector('#menu');
  hamburgerMenu.addEventListener('click', toggleMenu);

  function toggleCart() {
    const button = this;
    button.classList.toggle('adicionado');
    const menu = document.querySelector('#compra');
    const a = document.querySelector('a')
  
    if (button.classList.contains('adicionado')) {
      button.innerHTML = '<i class="fa-solid fa-check"></i> Adicionado ao carrinho';
      menu.textContent = button.value;
      a.classList.toggle('none')
    } else {
      button.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Adicionar ao carrinho';
      menu.textContent = '';
    }
  }
  
  const addToCartButtons = document.querySelectorAll('.card button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', toggleCart);
  });

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const pauseButton = document.getElementById('pauseButton');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
pauseButton.addEventListener('click', pauseSlide);

intervalId = setInterval(slideAnimation, 5000);
