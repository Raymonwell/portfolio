let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//     
//     console.log('yes')
//     
// };
menu.addEventListener('click', ()=>{
    navbar.classList.toggle("active");
    menu.classList.toggle("fas fa-x");
    console.log('yes')
})

window.onscroll = () => {
    menu.classList.remove("fas fa-x");
    navbar.classList.remove("active");
};


const sr = ScrollReveal ({
    distance: "50px",
    duration: 2500,
    reset: true
})

sr.reveal(".home-text",{delay:200, origin:"top"})
sr.reveal(".home-img",{delay:400, origin:"top"})
sr.reveal(".about, .services. .cta, .skills, .contact, .copyright", {delay:200, origin:"top"})


