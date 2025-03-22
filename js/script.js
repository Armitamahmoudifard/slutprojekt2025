document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".overlay").addEventListener("click", toggleMenu);
    document.querySelector("#menu-icon").addEventListener("click", toggleMenu);

    function toggleMenu() {
        let menu = document.querySelector(".sidebar");
        menu.classList.toggle("active");

        let layer = document.querySelector(".overlay");
        layer.classList.toggle("active");
    }
});

