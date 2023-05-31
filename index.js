//ALLOWS THE HOME PAGE BACKGROUND TO ZOOM OUT WHEN SCROLLING
const landingImg = document.getElementById("cover-img");
window.addEventListener('scroll', function(){
    landingImg.style.backgroundSize = 120 - +window.pageYOffset/30+'%';
    landingImg.style.opacity = 1 - +window.pageYOffset/700+'';
})

//SLIDES ELEMENTS FROM LEFT, RIGHT, or BELOW
const appearBottom = document.querySelectorAll('.from-bottom');
const appearLeft = document.querySelectorAll('.from-left');
const appearRight = document.querySelectorAll('.from-right')
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            if (entries = appearLeft){
                    entry.target.classList.add('animate-left');
                } else if (entries = appearRight) {
                    entry.target.classList.add('animate-right');
                }else {
                    entry.target.classList.add('animate-bottom')
                }
            } /*else {
                if (entries = appearLeft){
                    entry.target.classList.remove('animate-left');
                } else if (entries = appearRight){
                    entry.target.classList.remove('animate-right');
                }else {
                    entry.target.classList.remove('animate-bottom');
                }
            }*/ 
        //I removed this section as the animation may become too much
        //THIS REMOVES THE SECTION WHEN THE VARIABLE THAT SATISFIES THE CONDITION IS NO LONGER OBSERVED or being INTERSECTED.
    });
});
appearBottom.forEach((el)=> observer.observe(el));
appearLeft.forEach((el)=> observer.observe(el));
appearRight.forEach((el)=> observer.observe(el));