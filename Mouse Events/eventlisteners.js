const Box = document.getElementById("Box")
const myBtn = document.getElementById("myBtn")


// function changeColor(event){
//     event.target.style.backgroundColor = "cyan";
//     event.target.textContent = "You Clicke Me😀";//event is provided by browser atoumatically
// }

myBtn.addEventListener("click", event => {
   Box.style.backgroundColor = "cyan";
    Box.textContent = "You Clicke Me😀";//event is provided by browser atoumatically
});

Box.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "grey";
    event.target.textContent = "Don't Leave Me😣";//event is provided by browser atoumatically
});

Box.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "You Left Me😒";//event is provided by browser atoumatically
});

// KEY EVENTS
document.addEventListener("keydown", event => {
    MyBox.style.backgroundColor = "tomato";
    MyBox.textContent = "Keydown⬇️";//event is provided by browser atoumatically
});

document.addEventListener("keyup", event => {
    MyBox.style.backgroundColor = "orange";
    MyBox.textContent = "keyup⬆️";//event is provided by browser atoumatically
});

const MyBox = document.getElementById("MyBox")
const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break  
            case "ArrowDown":
                y += moveAmount;
                break    
            case "ArrowLeft":
                x -= moveAmount;
                break  
            case "ArrowRight":
                x += moveAmount;
                break  
        }
        MyBox.style.top = `${y}px`;
        MyBox.style.left = `${x}px`;
    }
});
