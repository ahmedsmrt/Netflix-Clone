

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
    slideArr.map((e) => {
        e.style.transition = '.7s';
    })

}
hideContent();


var currentPos = 0;
var clickPos = 0;

var sLength = slideArr.length;
var max = sLength - (sLength - 2);
var min = sLength - sLength;

var currentSlide = slideArr[currentPos];
var nextSlide = slideArr[min];
var prevSlide = slideArr[max];


leftArrow.addEventListener('click', () => {
    var popped = slideArr.pop();
   slideArr.unshift(popped);
    console.log(slideArr);
    
    if(currentPos > min) {
      
        currentPos -= 1;
        console.log(currentPos);

    }else {
        currentPos = max;
        console.log(currentPos);

    }

})


rightArrow.addEventListener('click', () => {    
    var popped = slideArr.pop();
    slideArr.unshift(popped);
     console.log(slideArr);
    if(currentPos < max) {
        
           currentPos += 1
           console.log(currentPos);
       }else {

           currentPos = 0;
           console.log(currentPos);
       }
       


})

var transLeft = function () {

}


var transRight = function () {
 
}



