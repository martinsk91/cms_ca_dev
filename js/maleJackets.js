// import { callApi } from "./api.js";
import {jacket} from "./api.js"

const maleJackets = document.querySelector(".male");



function createContentMale(){
    maleJackets.innerHTML = "";

    for(let i = 0; i < jacket.length; i++){
let price = jacket[i].prices.sale_price / 100;

    
    
if(jacket[i].categories[0].name === "men"){

maleJackets.innerHTML += `<div class="jackets1">
<img src="${jacket[i].images[0].src}">

<p>${jacket[i].name}</p> 
<p>${price}$</p>
<a href="specific.html?id=${jacket[i].id}" class="buyjacket">view more</a>
</div>`

}
}

}



createContentMale();
console.log(jacket[0].attributes[0].terms[0].name)