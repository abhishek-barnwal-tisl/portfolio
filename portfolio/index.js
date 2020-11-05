const toTop=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>50){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})




// TYPEWRITER CODE
const texts = ['~ a HTML developer', '~ a CSS developer', '~ a JS developer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 400);

}());

// localStorege

function store() {
    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputMobile = document.getElementById("mobile");
    var inputComment = document.getElementById("comment");
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("mobile", inputMobile.value);
    localStorage.setItem("comment", inputComment.value);
}