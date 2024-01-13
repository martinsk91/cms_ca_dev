import { jacket, jacketSpecific } from "./api.js";
import { newUrl } from "./api.js";

const content = document.querySelector("main");
const description = document.querySelector(".proddes");
const descButton = document.querySelector(".prdesc");
const detButton = document.querySelector(".prdet");
const image = document.querySelector(".urbanjacket");

let price = jacketSpecific.prices.sale_price / 100;



let gender = "";

if(jacketSpecific.categories[0].name === "woman"){
    gender = "Women"
}
else(gender = "Men")

console.log(gender);

function createHtml(Product){
  
    document.title = `${Product.name}`
image.innerHTML = `<img src="${Product.images[0].src}" alt="image of the urban jacket">`;           
description.innerHTML = `<p>${Product.short_description}</p>`



}

console.log(jacketSpecific);

createHtml(jacketSpecific);

function changeDescription(){
   
    description.innerHTML = `<p>Jacket: ${jacketSpecific.name}</p>
                             <p>Sizes: ${jacketSpecific.attributes[0].terms[0].name} - ${jacketSpecific.attributes[0].terms[4].name}</p>
                             <p>Gender: ${gender}</p>
                             <p>Price: ${price}$</p>`
detButton.classList.add("active");
detButton.classList.remove("non-active");
descButton.classList.remove("active");
descButton.classList.add("non-active");
                                 

} 

detButton.addEventListener('click',changeDescription);


function changeDescriptionBack(){
    description.innerHTML = `<p>${jacketSpecific.short_description}</p>`
    detButton.classList.remove("active");
detButton.classList.add("non-active");
descButton.classList.add("active");
descButton.classList.remove("non-active");


                   
} 


descButton.addEventListener('click',changeDescriptionBack);

console.log(lastJacket = jacketSpecific.attributes[0].terms[0].name);