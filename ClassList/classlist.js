const Button = document.getElementById("MyButton");
const Head = document.getElementById("h1");

//enabled for h1
Head.classList.add("enabled");
// Head.classList.remove("enabled");

//enabled for button
// Button.classList.add("enabled");
// Button.classList.remove("enabled");

// Button.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// });

// Button.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });

// Button.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// });

Button.classList.add("enabled");

Button.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😂";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
    
});