

var leftArrow = document.getElementById('leftA');
var rightArrow = document.getElementById('rightA');
var sec1 = document.getElementById('section1');
var sec2 = document.getElementById('section2');
var sec3 = document.getElementById('section3');
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');

var slideArr = [slide1, slide2, slide3];

var hideContent = function () {

    slideArr[2].style.transform = 'translateX(-300%)';

}
hideContent();


var currentPos = 0;
var clickPos = 0;

var sLength = slideArr.length;
var max = sLength - (sLength - 2);
var min = sLength - sLength;

var currentSlide = slideArr[currentPos];
var nextSlide = slideArr[currentPos + 1];
var prevSlide = slideArr[max]
leftArrow.addEventListener('click', () => {
    
    
    if(currentPos > min) {
        currentSlide.style.transition = '.7s';
        currentSlide.style.transform = 'translateX(100%)';
        currentPos -= 1;
        console.log(currentPos);

    }else {
        currentSlide.style.transition = '.7s';
        currentSlide.style.transform = 'translateX(100%)';
        currentPos = max;
        prevSlide.style.transition = '.7s';
        prevSlide.style.transform = 'translateX(100%)';
        console.log(currentPos);

    }
    prevSlide.style.transition = '.7s';
    prevSlide.style.transform = 'translateX(-200%)';
 
})


rightArrow.addEventListener('click', () => {    
   
    if(currentPos < max) {
        
           currentPos += 1;
           transRight();
           console.log(currentPos);
       }else {
          transRight();
           currentPos = 0;
           console.log(currentPos);
       }
       
    transRight();

})

var transLeft = function () {
    currentSlide.style.transition = '.7s';
    currentSlide.style.transform = 'translateX(100%)';
    prevSlide.style.transition = '.7s';
    prevSlide.style.transform = 'translateX(100%)';
}


var transRight = function () {
    currentSlide.style.transition = '.7s';
    currentSlide.style.transform = 'translateX(-100%)';
    nextSlide.style.transition = '.7s';
    nextSlide.style.transform = 'translateX(-100%)';
}



