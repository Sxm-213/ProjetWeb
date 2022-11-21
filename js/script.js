
let btn_menu=document.getElementById('btn_menu');
let nav=document.getElementById('nav');
let etat=0;



console.log(nav.style.left)
btn_menu.addEventListener('click',function(){
    if( nav.style.left=='-20%') 
    nav.style.left='0'
    else nav.style.left='-20%'
})
let p_details = document.getElementsByClassName('detail_art');
let btn_details = document.getElementsByClassName('btn_detail');

console.log(p_details);
console.log(btn_details);
for ( let i=0 ; i< btn_details.length; i++){
    btn_details[i].addEventListener('click',function(){
    /* if (p_details [i].style.height=='150px') p_details [i].style.height='300px'; 
    
   else 
   p_details [i].style.height='150px';
   }})*/



   if ( p_details[i].className=='detail_art detail_inactive')
   {
    p_details[i].classList.remove('detail_inactive')
    p_details[i].classList.add('detail_active')
   }
   else {
    p_details[i].classList.remove('detail_active')
    p_details[i].classList.add('detail_inactive')
   } 
  
})
}