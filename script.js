// ================================
// MENU MOBILE
// ================================

function toggleMenu() {
    const menu = document.querySelector(".menu");

    menu.classList.toggle("mobile-active");
}


// ================================
// BOTÃO DOS VEÍCULOS
// ================================

function showVehicle(vehicleName) {
    alert(
        "Você selecionou o " +
        vehicleName +
        ". Em breve teremos mais informações sobre este veículo."
    );
}


// ================================
// BOTÃO DE CARREGAMENTO / CONTATO
// ================================

function showMessage() {
    alert(
        "Obrigado pelo seu interesse na VINCI! " +
        "Em breve você poderá encontrar um ponto de carregamento próximo."
    );
}


// ================================
// FECHAR MENU AO CLICAR EM UM LINK
// ================================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const menu = document.querySelector(".menu");

        menu.classList.remove("mobile-active");

    });

});


// ================================
// ANIMAÇÃO AO ENTRAR NA PÁGINA
// ================================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});