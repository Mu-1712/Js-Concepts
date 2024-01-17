        //getElementsById
const Headh1 = document.getElementById("headh1");

console.log("getElementsById")
Headh1.style.backgroundColor = "Red";
Headh1.style.textAlign = "center";
console.log(Headh1);

         //getElementsByClassName
         console.log("getElementsByClassName")
const dishes = document.getElementsByClassName("dishes");
console.log(dishes);

dishes[0].style.backgroundColor = "grey"
dishes[1].style.backgroundColor = "magenta"
dishes[2].style.backgroundColor = "orange"

//dishes.forEach();//we cant access elements while
// using  class sector Uncaught TypeError: dishes.forEach is not a function

Array.from(dishes).forEach(friut =>{  //here we are copying elemnts into an array to perform forEach
    friut.style.backgroundColor = "magenta";
    friut.style.textAlign = "center";

});

             //getElementsByTagName
         console.log("getElementsByTagName")
         const h2Elements = document.getElementsByTagName("h2");
         console.log(h2Elements)

            //to apply individual background to all elementbs
            // h2Elements[1].style.backgroundColor = "cyan"
            // h2Elements[0].style.backgroundColor = "pink"

        //to apply same background to all elements using advanced for loop
        //  for(let h2Element of h2Elements){
        //     h2Element.style.backgroundColor = "cyan"
         //} 
         
            //using Array method
         Array.from(h2Elements).forEach(h2Element =>{  //here we are copying elemnts into an array to perform forEach
            h2Element.style.backgroundColor = "cyan";
            h2Element.style.textAlign = "center";
        });
         const liElements = document.getElementsByTagName("li");
        
         Array.from(liElements).forEach(liElement =>{  //here we are copying elemnts into an array to perform forEach
            liElement.style.backgroundColor = "green";
            liElement.style.textAlign = "center";
            
         });
        //to apply same background to all elements using advanced for loop
        // for(let liElement of liElements){
        //     liElement.style.backgroundColor = "green"
        // }


        //query Selector
        console.log("query Seelector:")

        const element = document.querySelector(".dishes")
        element.style.backgroundColor = "red"; 
        //query selector works on the firts element in HTML, what ever it may be class/id/tag etc..
         //we alraedy set the color of first elemnt(fish fry) in th class dishes..now query selector overrides it to red

         //query Selector
        console.log("query SeelectorAll:")

        const menus = document.querySelector("li")

        menus.forEach(menu =>{
            menu.style.backgroundColor = "pink"

        });

        

