"use strict"

document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('scroll', function() {
    const nav = document.querySelector("header");
    const logo = document.getElementById("logo-nav");
    let threshold = 60;
  
    if (window.pageYOffset > threshold) {
      nav.style.backgroundColor = "#fdf2e0";
      logo.style.height = "60%"
      logo.style.marginTop = "0"
    } else {
      nav.style.backgroundColor = 'transparent';
      logo.style.height = "90%"
      logo.style.marginTop = "50px"
    }
  });
  
});



  