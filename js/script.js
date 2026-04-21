console.log("lets see if this remains in your code")
console.log("it did")

const dots = document.querySelectorAll('.dot'); 
const sections = document.querySelectorAll('#titles, .event');

const observer = new IntersectionObserver((entries) => { //used youtube video to make the dots change color 
    entries.forEach(entry => {
        const index = [...sections].indexOf(entry.target);
        if (entry.isIntersecting) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active'); 
        }
    });
},  { threshold: 0.1, rootMargin: "0px 0px -50% 0px" }); //threshold is how much section is visible for trigger, root margin makes it so that it detects when the section is in the center
sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => { //failed from my website, scrolls to top when you reach the bottom, i didnt like this on my website but i thought i could use it here
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});


const path = document.querySelector('.wave-path');

window.addEventListener('scroll', () => { //changes height of wave path as you scroll, depending on how much scrolled, used AI to help me make this work properly 
    const scrolled = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = scrolled / totalHeight;
    path.style.strokeDashoffset = 900 - (900 * progress);
});

window.addEventListener('scroll', () => { 
    document.querySelectorAll('h3').forEach(h => {
        const offset = h.getBoundingClientRect().top;
        h.style.transform = `translateX(${offset * 0.1}px)`; //makes h3 move on x axis as you scroll down, thought this would emphasize the movemenmt a bit more 
    });
});

const overlay = document.querySelector('.gradient-overlay'); 

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = scrolled / totalHeight;
    overlay.style.opacity = progress; //gradient becomes more opaque as you scroll down 
});