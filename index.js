// For let in JS//

// let i=20;
// while(i<=40){
//     console.log("Omkar")
//     i++;
// }
// let str="Apna College";
// for (let i of str){
//     console.log("i = ",i)
// }

// Length of string //

// let str = "StringLength";
// let size = 0;
// for (let i of str){
//     console.log("i = ",i)
//     size++;
// }
// console.log("String size = " ,size);

// key//

// let Onepiece = {
//     Name :"Luffy",
//     Age : 22,
//     Work : " king of Pirates",
//     Dfriut : 1
// }
// for( let key in Onepiece){
//     console.log(Onepiece, "value = ", Onepiece[key]) 
// }
// let mousemoved = false;
//   const pointer ={
//     x: .5 * window.innerWidth,
//     y: .5 * window.innerWidth,
//   }
//   const  params = {
//     pointersNumber: 40,
//     widthFactor: .3,
//     mouseThreshold: .6,
//     spring: .4,
//     friction: .5
//   };
//   function updateMousePosition
//   (eX, eY) {
//     pointer .x = eX;
//     pointer .y = eY;
//   }
//   setupCanvas();
//   update(0);
//   window.addEventListener(
//     "resize", setupCanvas);
let mousemoved = false;
const pointer = {
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight
};

const params = {
    pointersNumber: 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5
};

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

function setupCanvas() {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Simple drawing example based on pointer position
    const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, canvas.width);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function update() {
    if (mousemoved) {
        draw();
        mousemoved = false;
    }
    requestAnimationFrame(update);
}

setupCanvas();
update();
window.addEventListener("resize", setupCanvas);

window.addEventListener('mousemove', (event) => {
    mousemoved = true;
    updateMousePosition(event.clientX, event.clientY);
});
