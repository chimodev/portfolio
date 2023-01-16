const left = document.querySelectorAll(".hd-left")
const right = document.querySelectorAll(".hd-right")
const down = document.querySelectorAll(".hd-down")

window.onscroll = () =>{
    left.forEach((el)=>{
        let top = el.getBoundingClientRect().top
        show(top,el)
    })
    right.forEach((el)=>{
        let top = el.getBoundingClientRect().top
        show(top,el)
    })
    down.forEach((el)=>{
        let top = el.getBoundingClientRect().top
        show(top,el)
    })
}

function show(top,el){
    if(top<=window.innerHeight){
        el.classList.add("show")
    }else{
        el.classList.remove("show")
    }
}

function scrollToEl(element){
    const header = document.querySelector("header").getBoundingClientRect().height
    const elTop = element.getBoundingClientRect().top
    const position = elTop +window.pageYOffset - header

    window.scrollTo({
        top: position,
        behavior: "smooth",
    })
}

function scAbout(){
    scrollToEl(document.getElementById("about"))
}

function scWork(){
    scrollToEl(document.getElementById("work"))
}

function scContact(){
    console.log(document.getElementById("contact").getBoundingClientRect().top)
    scrollToEl(document.getElementById("contact"))
}
