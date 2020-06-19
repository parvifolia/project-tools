const hello = "Merhaba Pıncır";


// SELECTORS
const grid = document.querySelector('.grid-items-wrapper')
const blog = document.querySelector('.blog');
const weather = document.querySelector('.weather');
const chat = document.querySelector('.chat');
const todo = document.querySelector('.todo');
const toolsTitle = document.querySelector('.tools-title')

const blogContents = document.querySelector('.blog-contents')

// // EVENT LISTENERS

grid.addEventListener('click', e=>{

    if (e.target.classList.contains('blog')){


        blog.children[0].style.transform='rotate(45deg) scale(1.5) translateY(-5vh)';

        blog.style.backgroundSize = '50% 3px, 3px 0%, 0 3px, 3px 25% ';

        weather.style.opacity=0;
        chat.style.opacity=0;
        todo.style.opacity=0;
        toolsTitle.innerText="BLOG"
        toolsTitle.style.fontSize='5vh';

        blogContents.style.display='flex';

        // Arrow Animation
        let blogTl = gsap.timeline({repeat: 100, repeatDelay: 0, yoyo : true})
        blogTl.to(".blog", {y:10,x:10,ease:Power1,duration:1.4})
        let blogTl2 = gsap.timeline({repeat: 100, repeatDelay: 0, yoyo : true})
        blogTl2.to(".blog-icon", {x:-10,ease:Power1,duration:1.4})


    } else if (e.target.classList.contains('weather')){

        weather.children[0].style.transform='rotate(-45deg) scale(1.5) translateY(5vh)';

        weather.style.backgroundSize = '25% 3px, 3px 50%, 0 0, 0 0 ';

        blog.style.opacity=0;
        chat.style.opacity=0;
        todo.style.opacity=0;
        toolsTitle.innerText="WEATHER";
        toolsTitle.style.fontSize='5vh';

        

    } else if (e.target.classList.contains('chat')){

        chat.children[0].style.transform='rotate(45deg) scale(1.5) translateY(5vh)';

        chat.style.backgroundSize = '0 0, 3px 25%, 50% 3px, 0 0 ';

        blog.style.opacity=0;
        weather.style.opacity=0;
        todo.style.opacity=0;
        toolsTitle.innerText="LIVE CHAT";
        toolsTitle.style.fontSize='5vh';
        toolsTitle.style.width='max-content';

    } else if (e.target.classList.contains('todo')){

        todo.children[0].style.transform='rotate(-45deg) scale(1.5) translateY(-5vh)';

        todo.style.backgroundSize = '0 0, 0 0, 25% 3px, 3px 50% ';

        blog.style.opacity=0;
        weather.style.opacity=0;
        chat.style.opacity=0;
        toolsTitle.innerText="TO DO";
        toolsTitle.style.fontSize='5vh';
    };
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

