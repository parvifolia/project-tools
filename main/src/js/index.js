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
    backArrow.style.display='none';

    // show all parts
    let items = [blog,weather,chat,todo];
    items.forEach(e=>{
        e.style.opacity=1;
        e.style.pointerEvents='auto';
        e.children[0].style.transform='rotate(0) scale(1) translateY(0)';
        e.style.backgroundSize = '100% 3px, 3px 100%, 100% 3px, 3px 100% ';
    });

    // hide all contents
    let contents = [blogContents,weatherContents,chatContents,todoContents];
    contents.forEach(e=>{
        e.style.display='none';
    });
})

grid.addEventListener('click', e=>{

    if (e.target.classList.contains('blog')){

        // back arrow appear
        backArrow.style.display='flex';

        // icon rotation
        blog.children[0].style.transform='rotate(45deg) scale(1.5) translateY(-5vh)';

        // hover border animation
        blog.style.backgroundSize = '50% 3px, 0 0, 0 0, 3px 25% ';

        // display none to other parts
        let opacity = [weather,chat,todo];
        opacity.forEach(e=>{
            e.style.opacity=0;
            e.style.pointerEvents='none';
        })

        // content appear
        toolsTitle.innerText="BLOG";
        toolsTitle.style.fontSize='5vh';
        blogContents.style.display='flex';

        //Arrow Animation
        let tl = gsap.timeline({repeat: 500, repeatDelay: 0, yoyo : true})
        tl.to(".blog-go", {y:10,ease:Power1,duration:1.4})

    } else if (e.target.classList.contains('weather')){

        backArrow.style.display='flex';

        weather.children[0].style.transform='rotate(-45deg) scale(1.5) translateY(5vh)';

        weather.style.backgroundSize = '25% 3px, 3px 50%, 0 0, 0 0 ';

        let opacity = [blog,chat,todo];
        opacity.forEach(e=>{
            e.style.opacity=0;
            e.style.pointerEvents='none';
        })

        toolsTitle.innerText="WEATHER";
        toolsTitle.style.fontSize='5vh';
        weatherContents.style.display='flex';

        let tl = gsap.timeline({repeat: 500, repeatDelay: 0, yoyo : true})
        tl.to(".weather-go", {x:-10,ease:Power1,duration:1.4})


    } else if (e.target.classList.contains('chat')){

        backArrow.style.display='flex';

        chat.children[0].style.transform='rotate(45deg) scale(1.5) translateY(5vh)';

        chat.style.backgroundSize = '0 0, 3px 25%, 50% 3px, 0 0 ';

        let opacity = [weather,blog,todo];
        opacity.forEach(e=>{
            e.style.opacity=0;
            e.style.pointerEvents='none';
        })

        toolsTitle.innerText="LIVE CHAT";
        toolsTitle.style.fontSize='5vh';
        toolsTitle.style.width='max-content';
        chatContents.style.display='flex';

        let tl = gsap.timeline({repeat: 100, repeatDelay: 0, yoyo : true})
        tl.to(".chat-go", {y:-10,ease:Power1,duration:1.4})

    } else if (e.target.classList.contains('todo')){

        backArrow.style.display='flex';

        todo.children[0].style.transform='rotate(-45deg) scale(1.5) translateY(-5vh)';

        todo.style.backgroundSize = '0 0, 0 0, 25% 3px, 3px 50% ';

        let opacity = [weather,chat,blog];
        opacity.forEach(e=>{
            e.style.opacity=0;
            e.style.pointerEvents='none';
        })

        toolsTitle.innerText="TO DO";
        toolsTitle.style.fontSize='5vh';
        todoContents.style.display='flex';

        let tl = gsap.timeline({repeat: 100, repeatDelay: 0, yoyo : true})
        tl.to(".todo-go", {x:10,ease:Power1,duration:1.4})
    }
});




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
})

tl.to('.todo', {
    duration: 0.5,
    opacity:1,
    ease: Power1. easeIn,
})


tl.to('.blog', {
    duration: 0.5,  
    opacity:1,
    ease: Power1. easeIn,
})


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

