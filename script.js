// ================================
// MENU MOBILE
// ================================

function toggleMenu() {
    const menu = document.querySelector(".menu");

    menu.classList.toggle("mobile-active");
}


// ================================
// JANELA (substitui o alert)
// ================================

let modal = null;

function createModal() {
    modal = document.createElement("dialog");
    modal.className = "modal";

    modal.innerHTML =
        '<h3 class="modal-title"></h3>' +
        '<p class="modal-text"></p>' +
        '<button type="button" class="button modal-close">Fechar</button>';

    document.body.appendChild(modal);

    // Fechar no botão
    modal.querySelector(".modal-close").addEventListener("click", function () {
        modal.close();
    });

    // Fechar ao clicar fora da janela
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.close();
        }
    });
}

function openModal(title, text) {
    if (!modal) {
        createModal();
    }

    modal.querySelector(".modal-title").textContent = title;
    modal.querySelector(".modal-text").textContent = text;

    modal.showModal();
}


// ================================
// BOTÃO DOS VEÍCULOS
// ================================

function showVehicle(vehicleName) {
    openModal(
        vehicleName,
        "Você escolheu este modelo. Em breve teremos aqui fotos, " +
        "ficha técnica e mais informações sobre ele."
    );
}


// ================================
// BOTÕES DE CARREGAMENTO E CONTATO
// ================================

// Aceita showMessage("carregador") ou showMessage("contato").
// Se vier sem nada (como está no HTML hoje), descobre pela seção do botão.
function showMessage(type) {
    if (!type) {
        const button = window.event && window.event.target;
        const inContact = button && button.closest && button.closest(".contact");
        type = inContact ? "contato" : "carregador";
    }

    if (type === "contato") {
        openModal(
            "Obrigado pelo interesse na VINCI",
            "Em breve você poderá falar com a gente por aqui."
        );
    } else {
        openModal(
            "Pontos de carregamento",
            "Estamos preparando o mapa de carregadores. " +
            "Em breve você poderá encontrar um ponto perto de você."
        );
    }
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