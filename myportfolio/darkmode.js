const dark = document.getElementById("dark");
const light = document.getElementById("light");

const body = document.getElementById("body");
const header = document.querySelector(".header");

dark.addEventListener("click",()=>{
    body.style.backgroundColor = "#000000";
    header.style.backgroundImage = "url('image/background3.jpg')";
    dark.classList.add("display")
    light.classList.remove("display")
})

light.addEventListener("click",()=>{
    body.style.backgroundColor = "#ffffff";
    header.style.backgroundImage = "url('image/background.jpg')"
    dark.classList.remove("display")
    light.classList.add("display")
})