
const nav = document.getElementById('navbar');
console.log(nav);
window.addEventListener("scroll", () => {
    if(scrollY>0){
        nav.classList.add("nav-colored");
    } else {
        nav.classList.remove("nav-colored");

    }
});
