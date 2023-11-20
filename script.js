"use strict";

const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const mobileTopSlides = slideLeft.querySelectorAll("div");
const slidersLenght = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidersLenght - 1) * 100}%`;




upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {

  if (direction == "up") {
    activeSlideIndex++;
    if (activeSlideIndex > (slidersLenght - 1)) {
      activeSlideIndex = 0;
    }



  }
  else if (direction == "down") {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidersLenght - 1;
    }


  }


  slideRight.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * 100}%)`;


}

