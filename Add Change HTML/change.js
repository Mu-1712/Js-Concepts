//.............Example 1 <h1>,,........

// step 1 create the element
const newh1 = document.createElement("h1")
const newh2 = document.createElement("h2")
const newh3 = document.createElement("h3")
const newh4 = document.createElement("h4")
const newh5 = document.createElement("h5")


//step 2 add attibute/properties
newh1.textContent = " i am end";
newh1.id = "myh1";
newh1.style.color = "magenta";
newh1.style.textAlign = "center";

newh2.textContent = " i am start";
newh2.id = "myh2";
newh2.style.color = "magenta";
newh2.style.textAlign = "center";

newh3.textContent = " i am BOX 1";
newh3.id = "myh3";
newh3.style.color = "grey";
newh3.style.textAlign = "center";

newh4.textContent = " i am in the of boxe's";
newh4.id = "myh4";
newh4.style.color = "cyan";
newh4.style.textAlign = "center";

newh5.textContent = " i am changable ";
newh5.id = "myh5";
newh5.style.color = "red";
newh5.style.textAlign = "center";

//step 3 Append element to DOM
document.body.append(newh1);//added at the end of all boxes
document.body.prepend(newh2);//added at the begining of all boxes
document.getElementById("box1").prepend(newh3);//added inbetween  boxes

const box2 = document.getElementById("box2");
document.body.insertBefore(newh4, box2)//insert element between boxes

const boxes = document.querySelectorAll(".box");//using class i.e is passing class as argument
document.body.insertBefore(newh5, boxes[3])

//remove HTML elements
document.getElementById("box1").removeChild(newh5);//remove theh element

