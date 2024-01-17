//firstElementChild
console.log("firstElementChild")

// to color all frst elements of ulindividually
// const element = document.getElementById("veggies");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "cyan";

// to color all frst elements of ul at a time 
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "cyan";

});

//LatElementChild
console.log("laststElementChild")

// to color all frst elements of ulindividually
// const lastelement = document.getElementById("veggies");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "cyan";

// to color all frst elements of ul at a time 
// const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement =>{
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "magenta";

});

//nextElementSibling
console.log("nextElementSibling")

const nextelement = document.getElementById("cousins");
const nextSibling = nextelement.nextElementSibling;
nextSibling.style.backgroundColor = "red";

//nextElementSibling
console.log("nextElementSibling")

const prevelement = document.getElementById("transport");
const prevSibling = prevelement.previousElementSibling;
prevSibling.style.backgroundColor = "grey";

//parentElement
console.log("parentElement")

const parelement = document.getElementById("fever");
const parent = parelement.parentElement;
parent.style.backgroundColor = "green";

//children
console.log("children")

const childelement = document.getElementById("sports");
const children = childelement.children;
console.log(children);

children[1].style.backgroundColor = "blue";//this method give color to seleted children using index

// Array.from(children).forEach(child =>{
    
//     child.style.backgroundColor = "blue";
// });// this array method give color to whole parent
