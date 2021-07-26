const button = document.getElementById("button-el")
const backdrop = document.getElementById("backdrop")
const modal = document.getElementById("modal")

    button.addEventListener("click", function(){
    backdrop.style.display="block"
    modal.style.display="block"
})

backdrop.addEventListener("click", function(){
    modal.style.display="none"
    backdrop.style.display="none"
})
