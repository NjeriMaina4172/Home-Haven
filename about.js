///function to toggle when user clicks on get started button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  ///close the menu when user clicks outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }