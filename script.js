window.addEventListener('scroll', revelarLogo);
const revelar = document.querySelectorAll(".revelar");

function revelarLogo() {
    for (let i = 0; i < revelar.length; i++) {
        let windowAltura = window.innerHeight;
        let revelarTop = revelar[i].getBoundingClientRect().top;
        let revelarPunto = 150;

        if (revelarTop < windowAltura - revelarPunto) {
            revelar[i].classList.add("active");
        }
        else {
            revelar[i].classList.remove("active");
        }
    }
}