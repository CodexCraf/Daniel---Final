function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

window.onload = function () {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = "none";
};

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var button = document.getElementById("page-up-button");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    var currentY = window.scrollY;
    var step = -currentY / 15;

    function scroll() {
        currentY += step;
        if (currentY <= 0) {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo(0, currentY);
            requestAnimationFrame(scroll);
        }
    }

    requestAnimationFrame(scroll);
}
