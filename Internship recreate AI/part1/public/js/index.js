


const bar = document.querySelector('.bar');
const ul = document.querySelector('ul');
const mpNav = document.querySelector('.mp-nav')
const transf = document.querySelector('.transf');

bar.addEventListener('click',()=>{
    console.log(mpNav.style)
    ul.classList.toggle('transf');
    // if(mpNav.style.transform == "translateX(-50%)"){
    //     mpNav.style.transform = "translateX(0%)";
    // }
    // else if(mpNav.style.transform == "translateX(0%)"){
    //     mpNav.style.transform = "translateX(-50%)";
    // }
})