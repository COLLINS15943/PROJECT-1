const toggle = document.querySelector(".toggle-button")
const popup = document.querySelector(".pop-up")
const backdrop = document.querySelector(".backdrop")



toggle.addEventListener("click", function(){
    popup.style.display="block"
    backdrop.style.display="block"
})

backdrop.addEventListener("click", function(){
    popup.style.display="none"
    backdrop.style.display="none"
})