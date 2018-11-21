function toggleImage() {
    let el = document.getElementsByClassName("toggle-visibility");
    for (let i = 0; i < el.length; i++) {
        // el[i].style.backgroundColor = "red";
        if (el[i].classList.contains("hidden")) {
            el[i].classList.remove("hidden");
        } else {
            el[i].classList.add("hidden");
        }
        // if (el[i].style.display === "block") {
        //     el[i].style.display = "none";
        // } else {
        //     el[i].style.display = "block";
        // }
    }
}
function toggleEye() {
    let el = document.querySelector(".fa-eye");
    if (el.classList.contains("fa-eye-slash")) {
        el.classList.remove("fa-eye-slash");
    } else {
        el.classList.add("fa-eye-slash");
    }
}
