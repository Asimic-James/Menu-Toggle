let menuToggle = document.querySelector("#menu-toggle");
let activeElements = document.querySelectorAll(".active-element");
let toggledMenu = menuToggle.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
    for(let activated = 0; activated < activeElements.length; activated++)
   {
      activeElements[activated].classList.toggle("active");
     }
});