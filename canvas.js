const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

let dotsArray

let mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
}

window.addEventListener("mousemove",(e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
})

class Dot{
    constructor(x,y,dirX,dirY,size){
        this.x = x;
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.size = size
    }
    
    draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI *2, false)
        ctx.fillStyle = "rgb(210, 50, 220)"
        ctx.fill()
    }
    update(){
        if(this.x > innerWidth || this.x < 0){
            this.dirX = -this.dirX
        }else if(this.y > innerHeight || this.y < 0){
            this.dirY = -this.dirY
        }


        this.x += this.dirX
        this.y += this.dirY
        this.draw()
    }

}


function init(){
    dotsArray = []
    let dotsLength = (canvas.width * canvas.height) / 3000
    for(let i = 0;i<dotsLength;i++){
        let size = (Math.random() * 4)
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.width
        let dirX = (Math.random() * 2) - 1
        let dirY = (Math.random() * 2) - 1
        dotsArray.push(new Dot(x,y,dirX,dirY,size))
    }
}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight)
    for(let i = 0;i<dotsArray.length;i++){
        dotsArray[i].update()
    }
    connectDots()
}

function connectDots(){
    for(let i = 0; i<dotsArray.length; i++){
        for(let j = 0; j<dotsArray.length; j++){
            let disX = dotsArray[i].x - dotsArray[j].x
            let disY = dotsArray[i].y - dotsArray[j].y
            let distance = Math.sqrt((disX**2) + (disY**2))

            if(distance < 300){
                ctx.lineWidth = 1;
                ctx.strokeStyle = `rgba(210, 50, 220,${0.7-distance/100})`
                ctx.beginPath()
                ctx.moveTo(dotsArray[i].x,dotsArray[i].y)
                ctx.lineTo(dotsArray[j].x,dotsArray[j].y)
                ctx.stroke()
            }
        }
    }
}

init()
animate()