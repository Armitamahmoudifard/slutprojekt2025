const meny= document.querySelector("#meny")
meny.addEventListener('click',taggleMenu)

document.getElementById("meny").addEventListener("click", function() {
    document.querySelector("ul").classList.toggle("show");
});