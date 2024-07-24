//toggle-button
//let toggleButton = document.getElementsByClassName("toggle-button")[0];
//let navbarLinks = document.getElementsByClassName("n-links")[0];
// toggleButton.addEventListener("click", () => {navbarLinks.classList.toggle("active");});


//for srollbar
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//aos
AOS.init();