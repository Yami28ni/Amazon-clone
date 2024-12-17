const imgs=document.querySelectorAll('.header-slider ul img');//select all images,it become the array of images
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');

let n=0;
function changeSlide(){
  for(let i=0;i<imgs.length;i++){
    imgs[i].style.display="none";
    }
  imgs[n].style.display="block";
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
if(n>0){
  n--;
}else{
  n=imgs.length-1;
}
changeSlide();
})

next_btn.addEventListener('click',(e)=>{
  if(n==imgs.length-1){
    n=0;
  }else{
    n++;
  }
  changeSlide();
})

const scrollContainer=document.querySelectorAll(".products");
for(const item of scrollContainer){
  item.addEventListener(('wheel'),(e)=>{
    e.preventDefault();
    item.scrollLeft+=e.deltaY;
  });
}





