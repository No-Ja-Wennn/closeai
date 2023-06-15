var couner = 1;
setInterval(function () {
    document.getElementById("radio" + couner).checked = true;
    couner++;
    if (couner > 4) {
        couner = 1;
    }
}, 5000);


const videoElement = document.querySelector(".web__video");
setTimeout(function () {
    videoElement.style.display = "none"
}, 3000);


// checked on the left
const leftElement = document.querySelector(".left");
const leftBox1 = leftElement.querySelector(".left__box1");
const leftBox2 = leftElement.querySelector(".left__box2");
const leftBox3 = leftElement.querySelector(".left__box3");
const leftBox4 = leftElement.querySelector(".left__box4");
const leftBox5 = leftElement.querySelector(".left__box5");
const mainTopInformation = document.querySelector(".main__top__information");
const inforLogo = mainTopInformation.querySelector(".main__top__information__logo");
const inforMember = mainTopInformation.querySelector(".main__top__information__member");
const inforLanguage = mainTopInformation.querySelector(".main__top__information__language");
const inforExperience = mainTopInformation.querySelector(".main__top__information__experience");
const inforKo = mainTopInformation.querySelector(".main__top__information__KO");
const inforConect = mainTopInformation.querySelector(".main__top__information__connect");



function backToStart() {
    leftBox1.classList.remove("active");
    leftBox2.classList.remove("active");
    leftBox3.classList.remove("active");
    leftBox4.classList.remove("active");
    leftBox5.classList.remove("active");

    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";

}


var clickOnElement = 0;

leftBox1.addEventListener("click", function () {

    leftBox1.classList.add("active");
    leftBox2.classList.remove("active");
    leftBox3.classList.remove("active");
    leftBox4.classList.remove("active");
    leftBox5.classList.remove("active");

    inforLogo.style.display = "none";
    inforMember.style.display = "block";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";
    clickOnElement = 1

});

leftBox2.addEventListener("click", function () {

    leftBox1.classList.remove("active");
    leftBox2.classList.add("active");
    leftBox3.classList.remove("active");
    leftBox4.classList.remove("active");
    leftBox5.classList.remove("active");

    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "block";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";

    clickOnElement = 2
});

leftBox3.addEventListener("click", function () {


    leftBox1.classList.remove("active");
    leftBox2.classList.remove("active");
    leftBox3.classList.add("active");
    leftBox4.classList.remove("active");
    leftBox5.classList.remove("active");

    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "block";
    inforKo.style.display = "none";
    inforConect.style.display = "none";

    clickOnElement = 3
});


leftBox4.addEventListener("click", function () {


    leftBox1.classList.remove("active");
    leftBox2.classList.remove("active");
    leftBox3.classList.remove("active");
    leftBox4.classList.add("active");
    leftBox5.classList.remove("active");

    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "block";
    inforConect.style.display = "none";

    clickOnElement = 4
});

leftBox5.addEventListener("click", function () {


    leftBox1.classList.remove("active");
    leftBox2.classList.remove("active");
    leftBox3.classList.remove("active");
    leftBox4.classList.remove("active");
    leftBox5.classList.add("active");

    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "block";

    clickOnElement = 5
});






// hover and fadein 
leftBox1.addEventListener("mouseover", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "block";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";

});

leftBox1.addEventListener("mouseout", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";

    if(clickOnElement == 0){
        inforLogo.style.display = "block";
    }
    else if (clickOnElement == 1) {
        inforMember.style.display = "block";
    }
    else if (clickOnElement == 2) {
        inforLanguage.style.display = "block";
    }
    else if (clickOnElement == 3) {
        inforExperience.style.display = "block";
    }
    else if (clickOnElement == 4) {
        inforKo.style.display = "block";
    }
    else if (clickOnElement == 5) {
        inforConect.style.display = "block";
    }
});

leftBox2.addEventListener("mouseover", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "block";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";

});
leftBox2.addEventListener("mouseout", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";


    if(clickOnElement == 0){
        inforLogo.style.display = "block";
    }
    else if (clickOnElement == 1) {
        inforMember.style.display = "block";
    }
    else if (clickOnElement == 2) {
        inforLanguage.style.display = "block";
    }
    else if (clickOnElement == 3) {
        inforExperience.style.display = "block";
    }
    else if (clickOnElement == 4) {
        inforKo.style.display = "block";
    }
    else if (clickOnElement == 5) {
        inforConect.style.display = "block";
    }
});

leftBox3.addEventListener("mouseover", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "block";
    inforKo.style.display = "none";
    inforConect.style.display = "none";

});
leftBox3.addEventListener("mouseout", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";
    
    if(clickOnElement == 0){
        inforLogo.style.display = "block";
    }
    else if (clickOnElement == 1) {
        inforMember.style.display = "block";
    }
    else if (clickOnElement == 2) {
        inforLanguage.style.display = "block";
    }
    else if (clickOnElement == 3) {
        inforExperience.style.display = "block";
    }
    else if (clickOnElement == 4) {
        inforKo.style.display = "block";
    }
    else if (clickOnElement == 5) {
        inforConect.style.display = "block";
    }
});


leftBox4.addEventListener("mouseover", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "block";
    inforConect.style.display = "none";


});
leftBox4.addEventListener("mouseout", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";
    
    if(clickOnElement == 0){
        inforLogo.style.display = "block";
    }
    else if (clickOnElement == 1) {
        inforMember.style.display = "block";
    }
    else if (clickOnElement == 2) {
        inforLanguage.style.display = "block";
    }
    else if (clickOnElement == 3) {
        inforExperience.style.display = "block";
    }
    else if (clickOnElement == 4) {
        inforKo.style.display = "block";
    }
    else if (clickOnElement == 5) {
        inforConect.style.display = "block";
    }
});

leftBox5.addEventListener("mouseover", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "block";

});

leftBox5.addEventListener("mouseout", function () {
    inforLogo.style.display = "none";
    inforMember.style.display = "none";
    inforLanguage.style.display = "none";
    inforExperience.style.display = "none";
    inforKo.style.display = "none";
    inforConect.style.display = "none";
    
    if(clickOnElement == 0){
        inforLogo.style.display = "block";
    }
    else if (clickOnElement == 1) {
        inforMember.style.display = "block";
    }
    else if (clickOnElement == 2) {
        inforLanguage.style.display = "block";
    }
    else if (clickOnElement == 3) {
        inforExperience.style.display = "block";
    }
    else if (clickOnElement == 4) {
        inforKo.style.display = "block";
    }
    else if (clickOnElement == 5) {
        inforConect.style.display = "block";
    }
});
