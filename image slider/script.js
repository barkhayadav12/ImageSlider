const prevBtn=document.querySelector('.prevBtn');
const nextBtn=document.querySelector('.nextBtn');
const container=document.querySelector('.images');

let counter=1;
nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);


function nextSlide(){
   if(counter===4){
    counter=0;
   }
    counter++;
    container.style.backgroundImage=`url(img${counter}.jpeg)`
}
function prevSlide(){
    if(counter===1){
     counter=5;
    }
     counter--;
     container.style.backgroundImage=`url(img${counter}.jpeg)`
 }

