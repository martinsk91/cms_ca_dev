// import { callApi } from "./api.js";
import {jacket} from "./api.js"



const button1 = document.querySelector(".bt1");
const button2 = document.querySelector(".bt2");
const button3 = document.querySelector(".bt3");
const button4 = document.querySelector(".bt4");
const saleContent = document.querySelector(".sale-cont");
const cross = document.querySelector(".cross");
const hidden = document.querySelector(".jackets-onsale");
const first = "first";
const second = "second";
const third = "third";
const fourth = "fourth";




function createContent(){
  

    
    const onSale = document.querySelector(".theJackets")
  ;
    onSale.innerHTML = ``;
 
  
    for( let i = 0; i < jacket.length; i++){
       let price = jacket[i].prices.sale_price / 100;
       
        onSale.innerHTML += `<div class="jackets1">
        
        <img src="${jacket[i].images[0].src}">
  
  <p>${jacket[i].name}</p> 
  <p>${price}</p>
  <a href="specific.html?id=${jacket[i].id}" class="buyjacket">view more</a>
  </div>`

if(i ===3){break;}
}




}


createContent();



function showContent(){
    hidden.classList.remove("hidden");
  
}

function closeContent(){

  
    hidden.classList.add("hidden");
    
    }


function placeContent(add, remove1, remove2, remove3){
    hidden.classList.add(add);
    hidden.classList.remove(remove1);
    hidden.classList.remove(remove2);
    hidden.classList.remove(remove3);
    
}





button1.addEventListener('click', function(){
    showContent();
    placeContent(first, second, third, fourth)
}); 



button2.addEventListener('click', function(){
    showContent();
    placeContent(second, first, third, fourth)
}); 

button3.addEventListener('click', function(){
    showContent();
    placeContent(third, first, second, fourth)
}); 

button4.addEventListener('click', function(){
    showContent();
    placeContent(fourth, first, second, third)
}); 

cross.addEventListener('click', closeContent);





