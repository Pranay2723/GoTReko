

document.addEventListener("DOMContentLoaded", function() {

let back=document.getElementById('back');
back.addEventListener('click',function() {
    alert("Redirected to main page :) ");
    window.location.href="index.html";

})
let lowopacitytext  = document.getElementById('low-opacity-p');
lowopacitytext.style.opacity=0.5;

let newtext=document.getElementById('text-on-readmore');
newtext.style.display="none";

let read=document.getElementById("read-more");
    read.addEventListener('click',function() {
        newtext.style.transition="all 0.8s";
        newtext.style.display="inline-block";
        lowopacitytext.style.opacity=1;
        read.style.display="none";
       
    })

let backtext=document.getElementById('read-less');
backtext.addEventListener('click',function() {
    backtext.style.transition="all 0.8s";
    lowopacitytext.style.opacity=0.5;
    newtext.style.display="none";
    read.style.display="inline-block";
})

let gallarybtn=document.getElementById('gallary');
gallarybtn.addEventListener('click',function() {
    window.location.href="Mahuli_Gallary.html";
    alert("Going to Gallary Page!");
})


let read_more = document.getElementById('read_more_details');
let after_read_more = document.getElementById('new-div');
let read_less=document.getElementById('read_less_details');
let upper_text=document.getElementById('opacity_text');
upper_text.style.opacity="0.5";

let lower_text=document.getElementById('opacity-text02');
lower_text.style.opacity="0.5";

read_less.style.display="none";
after_read_more.style.display="none";


read_more.addEventListener('click',function() {
    after_read_more.style.display="inline";
    read_less.style.display="inline";
    read_more.style.display="none";
    upper_text.style.opacity="1";
  
})
read_less.addEventListener('click',function() {
    after_read_more.style.display="none";
    read_less.style.display="none";
    read_more.style.display="inline";
    upper_text.style.opacity="0.5";
})


// Things to carry wala part
let read_more02=document.getElementById("read_more_2");
let things = document.getElementById('after_read');
things.style.display="none";
let read_less02=document.getElementById("read_less_2");
read_less02.style.display="none";


read_more02.addEventListener('click',function() {
    things.style.display="inline";
    read_more02.style.display="none";
    read_less02.style.display="inline";
    lower_text.style.opacity="1";
})
read_less02.addEventListener('click',function() {
    things.style.display="none";
    read_less02.style.display="none";
    read_more02.style.display="inline";
    lower_text.style.opacity="0.5";
})


// Review Section


// console.log(`${cust_name}`);

  const review_btn = document.getElementById('sub_btn');
  review_btn.addEventListener('click', function(event) {
    event.preventDefault();

    const cust_name = document.getElementById('review-name').value;
    const cust_email = document.getElementById('review-email').value;
    const cust_mobile = document.getElementById('review-mobile').value;
    const cust_review = document.getElementById('service_review').value;

    // Create a new review element
    let new_review = document.createElement('div');
    new_review.innerHTML = `
      <div>
        <img id="profile-photo" src="Animesh.png">
        <h4>${cust_name}</h4>
        <p id="review-para">${cust_review}</p>
      </div>
    `;

    // Append the new review to the main-review div
    document.getElementsByClassName('review-header').appendChild(new_review);

    // Reset the form fields after submission (optional)
    // document.getElementById('reviewForm').reset();
  });

});

