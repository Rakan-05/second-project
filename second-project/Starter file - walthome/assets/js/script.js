"use strict";


/**Navbar Toggle in mobile */

const /**nodeElement */navbar=document.querySelector("[data-navbar]");
const /**nodeElement */navToggler=document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click",()=>navbar.classList.toggle("active"));

/**Header scroll state */

const /**nodeElement */header=document.querySelector("[data-header]");

window.addEventListener("scroll",(e)=>{
header.classList[window.scrollY>50?"add":"remove"]("active");
});

/**Add to favourite button toggle */

const /**Nodelist */ togglebtns=document.querySelectorAll("[data-toggle-btn]");

togglebtns.forEach(togglebtn=>{
togglebtn.addEventListener("click",()=>{
togglebtn.classList.toggle("active");
});
});

