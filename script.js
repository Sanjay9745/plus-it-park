// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let menuCloseBtn = document.querySelector(".nav-links .fa-bars");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

const sound = document.querySelector(".sound");
const video = document.querySelector("#myVideo");

sound.addEventListener("click", function(){
    if(video.muted){
        video.muted = false;
        sound.classList.remove("fa-volume-off");
        sound.classList.add("fa-volume-up");
    } else {
        video.muted = true;
        sound.classList.remove("fa-volume-up");
        sound.classList.add("fa-volume-off");
    }
});

window.addEventListener("scroll", function(){
  if (window.scrollY >= 1500) {
      video.muted = true;
      sound.classList.remove("fa-volume-up");
      sound.classList.add("fa-volume-off");
  }
});
