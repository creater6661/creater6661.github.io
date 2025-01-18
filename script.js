document.addEventListener("DOMContentLoaded", () => {
    const alertButton = document.getElementById("alertButton");

    alertButton.addEventListener("click", () => {
        alert("Кнопка нажата!");
    });

    let prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
    };
});
