let buttons = document.querySelectorAll(".myBtn");

console.log(buttons);

//ADD HTML/CSS PROPERTIES
// buttons.forEach(button =>{
//     button.computedStyleMap.backgroundColor = "cyan"
//     button.textContent +="😉";
// });

//CLICK EVENT LISTENER
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "magenta";
    });
});

//moueover and mouseout  EVENT LISTENER
buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "red";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "black";
    });
});

//ADD AN element
const newBtn = document.createElement("button") //step 1
newBtn.textContent = "Button 5"; //step 2
newBtn.classList = "myBtn";
document.body.append(newBtn); //step 3

buttons = document.querySelectorAll(".myBtn");

console.log(buttons);

//REMOVE AN ELEMENT
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove(); //removes buttons from dom
        buttons = document.querySelectorAll(".myBtn"); //without this line the nodelist holds the all buttons, this manually uodates dom
        console.log(buttons);
    });
});
