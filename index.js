let testimonial1 = document.getElementById("testimonial1");
let testimonial2 = document.getElementById("testimonial2");
let testimonial3 = document.getElementById("testimonial3");

let testArray = [testimonial1, testimonial2, testimonial3];

function slideEffect() {
    setTimeout(()=> {
        testArray[0].style.display = "block";
    }, 1000)
    console.log(testArray[0])
testArray[0].style.animation = "examplecoming 0.5s ease forwards 0.1s";
testArray[0].style.color = "rgba(0,0,0,1)"
testArray[1].style.animation = "examplegoing 0.5s ease forwards 0.1s";
testArray[1].style.color = "rgba(0,0,0,0)"
    setTimeout(()=> {
        testArray[1].style.display = "none";
    }, 1000)
let removed = testArray.pop();
testArray.unshift(removed);
}
slideEffect();
setInterval(slideEffect, 3000);