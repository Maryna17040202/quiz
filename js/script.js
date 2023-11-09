let tests = document.querySelectorAll(".test");
let cross = document.querySelectorAll(".cross");
let boxClickTest = document.querySelector(".box-click-test");
let boxClickTestTwo = document.querySelector(".box-click-test-two")
let btnContinue = document.querySelector(".continue");
let offset = 0;
let slaidOne = document.querySelector(".slaid-one");
let slaidTwo = document.querySelector(".slaid-two");
let back = document.querySelector(".back");
let continueTwo = document.querySelector(".continueTwo");
let slaidThree = document.querySelector(".slaid-three");
let backThree = document.querySelector(".back-three");
let boxClickOne = document.querySelector(".box-click-one");
let boxClickTwo = document.querySelector(".box-click-two");
let boxClickThree = document.querySelector(".box-click-three");
let radioBtns = document.querySelectorAll(".radio-btn");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let offsetBtn = 0;
let slaiderImg = document.querySelector(".slaider-img");

for (let i = 0; i < radioBtns.length; i++) {
    const radioBtn = radioBtns[i];

    if (radioBtn.addEventListener("click", function(){
        radioBtn.classList.toggle("active-color");
        if (radioBtn.className === "radio-btn active-color") {
            console.log(boxClickTestTwo.innerText);
            boxClickTestTwo.innerText += radioBtn.innerText }
            else {
                let testStr = radioBtn.innerText;
                let boxClickTestTwoStr = boxClickTestTwo.innerText;
                boxClickTestTwo.innerText = boxClickTestTwoStr.replace(testStr, " ");
             }
    })) {
        
    }
    
}


for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    
    if (test.addEventListener("click", function () {
        test.classList.toggle("active-color");
        cross[i].classList.toggle("active");
        if (test.className === "test active-color") {
            boxClickTest.innerText += (test.innerText);
        }
         else {
            let testStr = test.innerText;
            let boxClickTestStr = boxClickTest.innerText;
            boxClickTest.innerText = boxClickTestStr.replace(testStr, " ");
         }
    })) {
        
    }
};

btnContinue.addEventListener("click", function () {
    if (offset == 0) {
        offset += -49;
    }

    slaidOne.style.left = offset + "vw";
    slaidTwo.style.left = offset + 'vw';
    boxClickOne.classList.toggle("click");
    boxClickTwo.classList.toggle("box-continue");
});

back.addEventListener("click", function(){
    if (offset == -49) {
        offset = 0;
    }

    slaidOne.style.left = offset + "vw";
    slaidTwo.style.left = offset + 'vw';
    boxClickOne.classList.toggle("click");
    boxClickTwo.classList.toggle("box-continue")

    
});

continueTwo.addEventListener("click", function() {
    if (offset == -49) {
        offset = -98;
    }

    slaidOne.style.left = offset + "vw";
    slaidTwo.style.left = offset + 'vw';
    slaidThree.style.left = offset + "vw";
    boxClickTwo.classList.toggle("click");
    boxClickThree.classList.toggle("box-continue")
    
});

backThree.addEventListener("click", function(){
    if (offset == -98) {
        offset = -49
    }

    slaidOne.style.left = offset + "vw";
    slaidTwo.style.left = offset + 'vw';
    slaidThree.style.left = offset + "vw";
    boxClickTwo.classList.toggle("click");
    boxClickThree.classList.toggle("box-continue")
});

leftBtn.addEventListener("click", function() {
    if (offsetBtn > -120) {
        offsetBtn -= 5;      
    }
        slaiderImg.style.left = offsetBtn + "vw"

});


rightBtn.addEventListener("click", function() {
    if (offsetBtn >= -120 && offsetBtn <= 15) {
        offsetBtn += 5;      
    }
        slaiderImg.style.left = offsetBtn + "vw"

});


let openBtn = document.getElementById("openBtn");
let myNavClose = document.getElementById("myNavClose");

openBtn.addEventListener("click", function() {
    document.getElementById("myNav").style.display = "block";
});
myNavClose.addEventListener("click", function () {
    document.getElementById("myNav").style.display = "none";
});


let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector(".box-navigation-menu");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("activ");
    navMenu.classList.toggle("activ-click-menu");
}

