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

const btn = document.getElementById("btn");

btn.addEventListener('click', btnOn)
function btnOn(){
    alert("Asegurate de que todos tus datos sean correctos para que pueda darte una respuesta. Una vez clickeado esta alerta, el mensaje se enviará.")
}