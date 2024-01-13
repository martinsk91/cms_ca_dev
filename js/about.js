const shopArrow = document.querySelector(".shopArrow");
const historyArrow = document.querySelector(".historyArrow");
const jobsArrow = document.querySelector(".jobsArrow");
const cBArrow = document.querySelector(".cBArrow");
const paragraph1 = document.querySelector("#par1");
const paragraph2 = document.querySelector("#par2");
const paragraph3 = document.querySelector("#par3");
const paragraph4 = document.querySelector("#par4");
const image1 = document.querySelector('#img1');
const image2 = document.querySelector('#img2');
const image3 = document.querySelector('#img3');
const image4 = document.querySelector('#img4');



function rotateArrow(arrow, paragraph, image){
    if(arrow.classList.contains('rotatedArrow')){
        arrow.classList.remove('rotatedArrow');
        paragraph.classList.add('hiddentext');
        image.classList.add('hiddentext')
    }

    else {
        arrow.classList.add('rotatedArrow');
        paragraph.classList.remove('hiddentext');
        image.classList.remove('hiddentext')
        
    };

   
}

shopArrow.addEventListener('click',function(){
    rotateArrow(shopArrow, paragraph1, image1);
});

historyArrow.addEventListener('click',function(){
    rotateArrow(historyArrow, paragraph2, image2);
});

jobsArrow.addEventListener('click',function(){
    rotateArrow(jobsArrow, paragraph3, image3);
});

cBArrow.addEventListener('click',function(){
    rotateArrow(cBArrow, paragraph4, image4);
});

