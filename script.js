let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('#navbar');


menubar.onclick = () =>{
    menubar.classlist.toggle('fa-times')
    mynav.classlist.toggle('active')
}

$("inner-services-content").click(function() {
    $(this).toggleClass("hover");
});

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