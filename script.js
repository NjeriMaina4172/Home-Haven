let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('#navbar');


menubar.onclick = () =>{
    menubar.classlist.toggle('fa-times')
    mynav.classlist.toggle('active')
}


const innerServicesContent = document.querySelector(".inner-services-content");
const categories = document.querySelectorAll(".categories p");

innerServicesContent.addEventListener("mouseenter", () => {
  categories.forEach((category) => {
    category.style.color = "white";
  });
});

innerServicesContent.addEventListener("mouseleave", () => {
  categories.forEach((category) => {
    category.style.color = "#003147";
  });
});

const innerServicesContent1 = document.querySelector(".inner-services-content1");
const categories1 = document.querySelectorAll(".categories1 p");

innerServicesContent1.addEventListener("mouseenter", () => {
  categories1.forEach((category) => {
    category.style.color = "white";
  });
});

innerServicesContent1.addEventListener("mouseleave", () => {
  categories1.forEach((category) => {
    category.style.color = "#003147";
  });
});
const innerServicesContent2 = document.querySelector(".inner-services-content2");
const categories2 = document.querySelectorAll(".categories2 p");

innerServicesContent2.addEventListener("mouseenter", () => {
  categories2.forEach((category) => {
    category.style.color = "white";
  });
});

innerServicesContent2.addEventListener("mouseleave", () => {
  categories2.forEach((category) => {
    category.style.color = "#003147";
  });
});

const innerServicesCont = document.querySelector(".inner-services-content");
const categs = document.querySelectorAll(".categories i");

innerServicesCont.addEventListener("mouseenter", () => {
  categs.forEach((category) => {
    category.style.color = "white";
  });
});

innerServicesCont.addEventListener("mouseleave", () => {
  categs.forEach((category) => {
    category.style.color = "#003147";
  });
});

const innerServicesCont1 = document.querySelector(".inner-services-content1");
const categs1 = document.querySelectorAll(".categories1 i");

innerServicesCont1.addEventListener("mouseenter", () => {
  categs1.forEach((category) => {
    category.style.color = "white";
  });
});

innerServicesCont1.addEventListener("mouseleave", () => {
  categs1.forEach((category) => {
    category.style.color = "#003147";
  });
});

const innerServicesCont2 = document.querySelector(".inner-services-content2");
const categs2 = document.querySelectorAll(".categories2 i");

innerServicesCont2.addEventListener("mouseenter", () => {
  categs2.forEach((category) => {
    category.style.color = "white";
  });
});

innerServicesCont2.addEventListener("mouseleave", () => {
  categs2.forEach((category) => {
    category.style.color = "#003147";
  });
});

const innerServices = document.querySelector(".inner-services-content");
const catego = document.querySelectorAll(".service-content h2");

innerServices.addEventListener("mouseenter", () => {
  catego.forEach((category) => {
    category.style.color = "white";
  });
});

innerServices.addEventListener("mouseleave", () => {
  catego.forEach((category) => {
    category.style.color = "#003147";
  });
});

const innerServices1 = document.querySelector(".inner-services-content1");
const catego1 = document.querySelectorAll(".service-content1 h2");

innerServices1.addEventListener("mouseenter", () => {
  catego1.forEach((category) => {
    category.style.color = "white";
  });
});

innerServices1.addEventListener("mouseleave", () => {
  catego1.forEach((category) => {
    category.style.color = "#003147";
  });
});

const innerServices2 = document.querySelector(".inner-services-content2");
const catego2 = document.querySelectorAll(".service-content2 h2");

innerServices2.addEventListener("mouseenter", () => {
  catego2.forEach((category) => {
    category.style.color = "white";
  });
});

innerServices2.addEventListener("mouseleave", () => {
  catego2.forEach((category) => {
    category.style.color = "#003147";
  });
});

const innerServiceCon = document.querySelector('.inner-services-content');
const serviceIcon = document.querySelector('.services-icon');

innerServiceCon.addEventListener('mouseover', function() {
  serviceIcon.style.display = 'none';
});

innerServiceCon.addEventListener('mouseout', function() {
  serviceIcon.style.display = 'block';
});

const innerServiceCon1 = document.querySelector('.inner-services-content1');
const serviceIcon1 = document.querySelector('.services-icon1');

innerServiceCon1.addEventListener('mouseover', function() {
  serviceIcon1.style.display = 'none';
});

innerServiceCon1.addEventListener('mouseout', function() {
  serviceIcon1.style.display = 'block';
});

const innerServiceCon2 = document.querySelector('.inner-services-content2');
const serviceIcon2 = document.querySelector('.services-icon2');

innerServiceCon2.addEventListener('mouseover', function() {
  serviceIcon2.style.display = 'none';
});

innerServiceCon2.addEventListener('mouseout', function() {
  serviceIcon2.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var achievement = document.querySelector(".inner-achievements1");
      var achievementPosition = achievement.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.5;

      if (achievementPosition < screenPosition) {
        var number1 = document.getElementById("number1");
        var currentNumber = 0;
        var targetNumber = 100000;
        var interval = setInterval(function() {
          currentNumber += 1000;
          number1.innerHTML = currentNumber;
          if (currentNumber >= targetNumber) {
            clearInterval(interval);
          }
        }, 100);
      }
    });
  });



  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "flex";
    index++;
    if (index >= slides.length) {
      index = 0;
    }
  }

  showSlide();
  setInterval(showSlide, 8000);