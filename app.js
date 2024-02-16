const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
const items = [...document.querySelectorAll('.number')];
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

navToggle.addEventListener("click", function () {
    const linksHeigh = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0)
    {
        linksContainer.style.height = `${linksHeigh}px`;
    }
    else
    {
        linksContainer.style.height = 0;
    }
    console.log(linksContainer.getBoundingClientRect());
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

const scrollLinks = document.querySelectorAll(".scroll-link")
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
    });
});

const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;
  
    const increaseCount = setInterval(() => {
      initialValue += increment;
  
      if (initialValue > value) {
        el.textContent = `${value}+`;
        clearInterval(increaseCount);
        return;
      }
  
      el.textContent = `${initialValue}+`;
    }, 1);
  };
  
  items.forEach((item) => {
    updateCount(item);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const animatedItems = document.querySelectorAll(".box, .container, .links-container");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight * 0.75 && rect.bottom >= 0;
    }

    function checkVisibility() {
        animatedItems.forEach((item) => {
            if (isElementInViewport(item)) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    checkVisibility();

    document.addEventListener("scroll", checkVisibility);

    const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}


});
