const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

function redirecionarParaPagNoticias() {
    window.location.href = "Pages/Noticias.html";
}

function redirecionarParaPagSiglas() {
    window.location.href = "/Project_PVZ_siglas/Pages/SiglasPoveiras.html";
}
function redirecionarParaPagHistoria() {
    window.location.href = "Pages/Historia.html";
}

