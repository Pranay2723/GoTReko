// function next(e) {
//     window.location.href="booking.html";
// }
// let b= document.getElementsByClassName('common-btn');
// // console.log(b);
// b[0].addEventListener('click',next);

document.addEventListener("DOMContentLoaded", function() {
let submit =document.getElementById('btn');
submit.addEventListener('click',greet);

function greet(e) {
    alert("Thank You for your resposne ! ");
}
})