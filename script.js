const navbar = document.querySelector('.navbar')
const home = document.querySelector('.home')
const fadeUp = document.querySelectorAll('.fade-up')
const fadeLeft = document.querySelectorAll('.fade-left')
const fadeRight = document.querySelectorAll('.fade-right')
const menu = document.querySelector('.menu')

const homeObserver = new IntersectionObserver(([entry]) => {
    if(entry.isIntersecting === false){
        navbar.classList.replace('bg-transparent','bg-cream')
    } else {
        navbar.classList.replace('bg-cream','bg-transparent')
    }
}, {threshold: 0.8})

homeObserver.observe(home)

const fadeToTop = new IntersectionObserver((entries) => {
    entries.map((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.replace('translate-y-12', 'translate-y-0')
            entry.target.classList.replace('opacity-20', 'opacity-100')
            entry.target.classList.replace('blur-sm', 'blur-none')
        }
    })
}, {threshold:0.2})

fadeUp.forEach(element => {
    fadeToTop.observe(element)
});

const fadeToLeft = new IntersectionObserver((entries) => {
    entries.map((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.replace('translate-x-20', 'translate-x-0')
            entry.target.classList.replace('opacity-20', 'opacity-100')
            entry.target.classList.replace('blur-sm', 'blur-none')
        }
    })
}, {threshold: 0.2})

fadeLeft.forEach(element => {
    fadeToLeft.observe(element)
});

const fadeToRight = new IntersectionObserver((entries) => {
    entries.map((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.replace('-translate-x-20', 'translate-x-0')
            entry.target.classList.replace('opacity-20', 'opacity-100')
            entry.target.classList.replace('blur-sm', 'blur-none')
        }
    })
}, {threshold: 0.2})

fadeRight.forEach(element => {
    fadeToRight.observe(element)
});

const barClick = () => {
    if(menu.classList.contains('translate-x-[100vw]')){
        menu.classList.replace('translate-x-[100vw]', 'translate-x-0')
    } else {
        menu.classList.replace('translate-x-0', 'translate-x-[100vw]')
    }

}