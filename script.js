const menu = document.querySelector(".menu")
const img = document.querySelector("#menuImg")

menu.addEventListener("click",()=>{
    const cross = "images/cross.svg"
    const hamburger = "images/hamburger.svg"
    
    img.src = img.src.includes(cross) ? hamburger : cross 
    document.querySelector(".res-nav").classList.toggle("res-active")
})