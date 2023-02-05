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









const myDiv = document.querySelector("#myDiv");
const myText = document.querySelector("#myText");

const images = [
  "./Images/image1.jpg",
  "./Images/image2.jpg",
  "./Images/image3.jpg",
  "./Images/image4.jpg"
];

const texts = [
  "I've been using this home haven services for a few months now and I have to say, I'm impressed.The doctors and therapists are knowledgeable and always go above and beyond to make sure I receive the best possible care. The website is user-friendly and makes scheduling appointments a breeze.I highly recommend this service to anyone who needs medical attention in the comfort of their own home",
  "My little one was suffering from a speech delay and we were recommended to try Home Haven. The speech therapist was amazing and my child has made significant progress. The comfort of receiving quality therapy in our own home has been a game-changer. I highly recommend this service to any parent in need of therapy services for their child.",
  "As a senior citizen, I was hesitant about receiving medical care at home. But after trying their services, I have to say I'm pleasantly surprised. The healthcare professionals are very kind. I'm glad I can receive quality medical care without leaving my home. I highly recommend this service to anyone in need.",
  "I was recently in an accident and needed physical therapy. I was pleased to learn about this home haven and gave it a try. The therapists were very patient and the exercises they gave me helped me recover faster than I expected. I'm grateful for the convenience and quality of care I received. I highly recommend their services"
];

let currentIndex = 0;

function changeBackground() {
  myDiv.style.backgroundImage = `url(${images[currentIndex]})`;
  myText.innerText = texts[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3000);