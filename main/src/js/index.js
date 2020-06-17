const hello = "Merhaba Pıncır";


// SELECTORS
const grid = document.querySelector('.grid-items-wrapper')
const blog = document.querySelector('.blog');
const weather = document.querySelector('.weather');
const chat = document.querySelector('.chat');
const todo = document.querySelector('.todo');
const topSpace = document.querySelector('.grid-wrapper-topspace');
const bottomSpace = document.querySelector('.grid-wrapper-bottomspace');
const leftSpace = document.querySelector('.grid-wrapper-leftspace');
const rightSpace = document.querySelector('.grid-wrapper-rightspace');

// EVENT LISTENERS

// grid.addEventListener('click', e=>{

//     // first clear all active status
//     let items = [topSpace,bottomSpace,rightSpace,leftSpace,blog,weather,chat,todo]
//     items.forEach(item=>{
//         item.style.backgroundColor='transparent';
//         item.style.color='#e2e2e2';
//     })

//     if (e.target.classList.contains('blog')){
//         leftSpace.children[0].style.visibility = 'visible';
//         leftSpace.style.backgroundColor = 'rgb(' + 38 + ',' + 105 + ',' + 102 + ')';
//         blog.style.color='white';
//         blog.style.backgroundColor = 'rgb(' + 38 + ',' + 105 + ',' + 102 + ')';
//     } else if (e.target.classList.contains('weather')){
//         topSpace.children[0].style.visibility = 'visible';
//         topSpace.style.backgroundColor = 'rgb(' + 38 + ',' + 105 + ',' + 102 + ')';
//         weather.style.color='white';
//         weather.style.backgroundColor = 'rgb(' + 38 + ',' + 105 + ',' + 102 + ')';
//     } else if (e.target.classList.contains('chat')){
//         rightSpace.children[0].style.visibility = 'visible';
//         rightSpace.style.backgroundColor = 'rgb(' + 38 + ',' + 105 + ',' + 102 + ')';
//         chat.style.color='white';
//         chat.style.backgroundColor = 'rgb(' + 38 + ',' + 105 + ',' + 102 + ')';
//     } else if (e.target.classList.contains('todo')){
//         bottomSpace.children[0].style.visibility = 'visible';
//         bottomSpace.style.backgroundColor = 'rgb(' + 38 + ',' + 105 + ',' + 102 + ')';
//         todo.style.color='white';
//         todo.style.backgroundColor = 'rgb(' + 38 + ',' + 105 + ',' + 102 + ')';
//     };
// })



// GSAP
var tl = gsap.timeline();

tl.to('.tools-title', {
    duration: 0.8,
    opacity:1,
})

// tl.to('.weather', {
//     delay: 0.4,
//     duration: 0.5,
//     opacity:1,
//     ease: Power1. easeIn,
// })

// tl.to('.chat', {
//     duration: 0.5,
//     opacity:1,
//     ease: Power1. easeIn,
// })

// tl.to('.todo', {
//     duration: 0.5,
//     opacity:1,
//     ease: Power1. easeIn,
// })


// tl.to('.blog', {
//     duration: 0.5,  
//     opacity:1,
//     ease: Power1. easeIn,
// })


tl.to('.by', {
    duration: 0.5,
    opacity:1,
    ease: Power1. easeIn,
})
tl.to('.parvifolia', {
    duration: 0.5,
    opacity:1,
    ease: Power1. easeIn,
},"-=0.5")

