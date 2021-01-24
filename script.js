var menubar = document.querySelector('#menubar');
var full_menu = document.querySelector('#full_menu');
var close = document.querySelector('#close');

menubar.addEventListener('click',function(){
    full_menu.style.transform = 'translateX(100%)';
})

close.addEventListener('click',function(){
    full_menu.style.transform = 'translateX(0%)';
})

function onset(){
    full_menu.style.transform = 'translateX(100%)';

}

function closet(){
    full_menu.style.transform = 'translateX(0%)';

}

onset();
closet();

animation-GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from('nav .anim',{
    scrollTrigger:{
        trigger:'nav',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1,
    x:-30,
    ease:'expo.easeInOut'

})




