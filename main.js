

  window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
      nav.classList.add("shrink");
    }else{
      nav.classList.remove("add-shadow");
      nav.classList.remove("shrink");
    }
  });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop:true,
  speed: 1000,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  

  // And if we need scrollbar
  
});


