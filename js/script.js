

var leftArrow = document.getElementById('leftA');
var rightArrow = document.getElementById('rightA');
var sec1 = document.getElementById('section1');
var sec2 = document.getElementById('section2');
var sec3 = document.getElementById('section3');
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');


var secArr = [sec1, sec2, sec3]
var slideArr = [slide1, slide2, slide3];



var hideContent = function () {
    slideArr.map((e) => {
        e.style.transition = '.9s';
    })

}
hideContent();


var currentPos = 1;
var clickPos = 0;

var sLength = slideArr.length;
var max = sLength - (sLength - 2);
var min = sLength - sLength;

var currentSlide = slideArr[currentPos];
var nextSlide = secArr[min];
var prevSlide = secArr[max];
var cloneFirst = nextSlide.cloneNode(true);
var testArr = [];

leftArrow.addEventListener('click', () => {

    console.log(slideArr);
    
    if(currentPos > min) {
      slideArr[currentPos].style.transform = 'translateX(-100%)';
      slideArr[max].style.transform = 'translateX(-100%)';
        currentPos -= 1;
        console.log(currentPos);

    }else {


        slideArr[currentPos].style.transform = 'translateX(-100%)';
        slideArr[max].style.transform = 'translateX(-100%)';
        currentPos = max;
        console.log(currentPos);

    }
    var popped = slideArr.shift();
    slideArr.push(popped);
  
})


rightArrow.addEventListener('click', () => {    

     console.log(slideArr);
    if(currentPos < max) {
        slideArr[currentPos].style.transform = 'translateX(0)';
        slideArr[1].style.transform = 'translateX(0)';
           currentPos += 1
           console.log(currentPos);
       }else {
        slideArr[currentPos].style.transform = 'translateX(0)';
        slideArr[1].style.transform = 'translateX(0)';
           currentPos = 0;
           console.log(currentPos);
       }
       var popped = slideArr.pop();
       slideArr.unshift(popped);  


})

var transLeft = function () {

}


var transRight = function () {
 
}



