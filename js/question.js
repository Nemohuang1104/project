
// 漢堡
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.threebar').addEventListener('click', function () {
        this.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.threebar').addEventListener('click', function () {
        var element = document.getElementById("activeopen");
        element.classList.toggle('active');
    });
});



//手風琴
let arrows = document.getElementsByClassName("arrow");

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function () {
        // Loop through all arrows and close them, except the current one
        for (let j = 0; j < arrows.length; j++) {
            if (arrows[j] !== this) {
                arrows[j].classList.remove("active");
                let otherAnswer = arrows[j].nextElementSibling;
                otherAnswer.style.maxHeight = null;
            }
        }

        // Toggle the current arrow
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
}