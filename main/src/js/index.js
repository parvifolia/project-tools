const hello = "Merhaba Pıncır";

// SELECTORS
const grid = document.querySelector('.grid-items-wrapper');
const blog = document.querySelector('.blog');
const weather = document.querySelector('.weather');
const chat = document.querySelector('.chat');
const todo = document.querySelector('.todo');
const toolsTitle = document.querySelector('.tools-title');
////////////
const blogContents = document.querySelector('.blog-contents');
const weatherContents = document.querySelector('.weather-contents');
const chatContents = document.querySelector('.chat-contents');
const todoContents = document.querySelector('.todo-contents')
const backArrow = document.querySelector('.back-arrow');

// EVENT LISTENERS

backArrow.addEventListener('click', ()=>{

    // back arrow hide

    gsap.to('.back-arrow',{x:-200,duration:0.4,onComplete: gComp})
    function gComp(){
        backArrow.style.display='none';
        gsap.to('.back-arrow',{x:0,duration:0.01})
    }


    // show all parts
    let items = [blog,weather,chat,todo];
    items.forEach(e=>{
        e.style.opacity=1;
        e.style.pointerEvents='auto';
        e.children[0].style.transform='rotate(0) scale(1) translateY(0)';
        e.style.backgroundSize = '100% 3px, 3px 100%, 100% 3px, 3px 100% ';
        let b = "linear-gradient(to right, rgb(38, 105, 102) 100%, rgba(38, 105, 102) 100%)"
        e.style.backgroundImage= `${b},${b},${b},${b}`

    });

    // hide all contents
    let contents = [blogContents,weatherContents,chatContents,todoContents];
    contents.forEach(e=>{
        e.style.display='none';
    });
})

grid.addEventListener('click', e=>{

    // hover animation var
    let b = "linear-gradient(to right, rgba(38, 105, 102,0) 100%, rgba(38, 105, 102,0) 100%)"

    if (e.target.classList.contains('blog')){

        // back arrow appear
        backArrow.style.display='flex';
        gsap.from('.back-arrow',{x:-200,duration:0.6})

        // icon rotation
        if (window.innerWidth < 576) {
            blog.children[0].style.transform='rotate(45deg) scale(1.5) translateY(-3vh) translateX(-1vh)';
        } else {
            blog.children[0].style.transform='rotate(45deg) scale(1.5) translateY(-5vh)';
        }

        // hover border animation
        blog.style.backgroundSize = '50% 3px, 0 0, 0 0, 3px 25% ';
        blog.style.backgroundImage= `${b},${b},${b},${b}`

        // display none to other parts
        let opacity = [weather,chat,todo];
        opacity.forEach(e=>{
            e.style.opacity=0;
            e.style.pointerEvents='none';
        })

        // content appear
        blogContents.style.display='flex';

        //Arrow Animation
        let tl = gsap.timeline({repeat: 500, repeatDelay: 0, yoyo : true})
        tl.to(".blog-go", {y:10,ease:Power1,duration:1.4})

    } else if (e.target.classList.contains('weather')){

        backArrow.style.display='flex';
        gsap.from('.back-arrow',{x:-200,duration:0.6})

        if (window.innerWidth < 576) {
            weather.children[0].style.transform='rotate(-45deg) scale(1.5) translateY(-6vh) translateX(-8.2vh)';
        } else {
            weather.children[0].style.transform='rotate(-45deg) scale(1.5) translateY(5vh)';
        }

        weather.style.backgroundSize = '25% 3px, 3px 50%, 0 0, 0 0 ';
        weather.style.backgroundImage= `${b},${b},${b},${b}`


        let opacity = [blog,chat,todo];
        opacity.forEach(e=>{
            e.style.opacity=0;
            e.style.pointerEvents='none';
        })

        weatherContents.style.display='flex';

        if (window.innerWidth < 576) {
            let tl = gsap.timeline({repeat: 100, repeatDelay: 0, yoyo : true})
            tl.to(".weather-go", {y:-10,ease:Power1,duration:1.4})
        } else {
        let tl = gsap.timeline({repeat: 500, repeatDelay: 0, yoyo : true})
        tl.to(".weather-go", {x:-10,ease:Power1,duration:1.4})
        }

    } else if (e.target.classList.contains('chat')){

        backArrow.style.display='flex';
        gsap.from('.back-arrow',{x:-200})

        if (window.innerWidth < 576) {
            chat.children[0].style.transform='rotate(45deg) scale(1.5) translateY(5vw) translateX(-1vh)';
        } else {
            chat.children[0].style.transform='rotate(45deg) scale(1.5) translateY(5vh)';
        }

        chat.style.backgroundSize = '0 0, 3px 25%, 50% 3px, 0 0 ';
        chat.style.backgroundImage= `${b},${b},${b},${b}`


        let opacity = [weather,blog,todo];
        opacity.forEach(e=>{
            e.style.opacity=0;
            e.style.pointerEvents='none';
        })

        chatContents.style.display='flex';

        let tl = gsap.timeline({repeat: 100, repeatDelay: 0, yoyo : true})
        tl.to(".chat-go", {y:-10,ease:Power1,duration:1.4})

    } else if (e.target.classList.contains('todo')){

        backArrow.style.display='flex';
        gsap.from('.back-arrow',{x:-200})

        if (window.innerWidth < 576) {
            todo.children[0].style.transform='rotate(-45deg) scale(1.5) translateY(4vh) translateX(8.5vh)';
        } else {
            todo.children[0].style.transform='rotate(-45deg) scale(1.5) translateY(-5vh)';
        }

        todo.style.backgroundSize = '0 0, 0 0, 25% 3px, 3px 50% ';
        todo.style.backgroundImage= `${b},${b},${b},${b}`


        let opacity = [weather,chat,blog];
        opacity.forEach(e=>{
            e.style.opacity=0;
            e.style.pointerEvents='none';
        })

        todoContents.style.display='flex';


        if (window.innerWidth < 576) {
            let tl = gsap.timeline({repeat: 100, repeatDelay: 0, yoyo : true})
            tl.to(".todo-go", {y:-10,ease:Power1,duration:1.4})
        } else {
        let tl = gsap.timeline({repeat: 100, repeatDelay: 0, yoyo : true})
        tl.to(".todo-go", {x:10,ease:Power1,duration:1.4})
        }
    }
});

// Change Title when hover element

function changeTitle (title) {
    toolsTitle.innerText=`${title}`;
    toolsTitle.style.fontSize='calc(2vh + 1.4vw )';
    toolsTitle.style.width='max-content';
    gsap.to(".tools-title",{opacity:1,duration:0.3});
}

blog.addEventListener('mouseenter',()=>{
    gsap.to(".tools-title",{opacity:0, duration:0.3,onComplete:changeTitle,onCompleteParams:["BLOG"]})
})
weather.addEventListener('mouseenter',()=>{
    gsap.to(".tools-title",{opacity:0,duration:0.3,onComplete:changeTitle,onCompleteParams:["WEATHER"]})
})
chat.addEventListener('mouseenter',()=>{
    gsap.to(".tools-title",{opacity:0,duration:0.3,onComplete:changeTitle,onCompleteParams:["CHAT"]})
})
todo.addEventListener('mouseenter',()=>{
    gsap.to(".tools-title",{opacity:0,duration:0.3,onComplete:changeTitle,onCompleteParams:["TODO"]})
})















// GSAP
var tl = gsap.timeline();

tl.to('.tools-title', {
    duration: 0.8,
    opacity:1,
})

tl.to('.weather', {
    duration: 0.5,
    opacity:1,
    ease: Power1. easeIn,
})

tl.to('.chat', {
    duration: 0.5,
    opacity:1,
    ease: Power1. easeIn,
},"-=0.3")

tl.to('.todo', {
    duration: 0.5,
    opacity:1,
    ease: Power1. easeIn,
},"-=0.3")

tl.to('.blog', {
    duration: 0.5,  
    opacity:1,
    ease: Power1. easeIn,
},"-=0.3")


tl.to('.by', {
    duration: 0.5,
    opacity:1,
    ease: Power1. easeIn,
})
tl.to('.parvifolia', {
    duration: 0.5,
    opacity:1,
    ease: Power1. easeIn,
},"-=0.3")

