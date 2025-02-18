//----------------------//
// CUSTOM ALERT BOX //
const alertBox = document.getElementById("customAlertBox");
const alertMessageContainer = document.getElementById("alertMessage");
const closeImg = document.querySelector(".close");
const modalImg = document.getElementById("brand-logo-popup");
const form = document.getElementById("contact-form");

//----------------------//
// Send E-mail via EmailJS //
window.onload = function() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm("service_o99x166","contact_form", this).then((response) => {
                console.log("Message was sent successfully!");

                modalImg.style.display = "block";
                alertMessageContainer.innerHTML ="Formulário enviado com sucesso! A Lobby Arquitetura entrará em contato em breve com seu orçamento";
                alertBox.style.display = "block";
                form.reset();

            }, (error) => {
                console.log("Error. Try again.", error);
                alertMessageContainer.innerHTML ="Erro ao enviar o formulário. Tente novamente.";
                alertBox.style.display = "block";
            });
    });

    closeImg.addEventListener('click', function () {
        alertBox.style.display = "none";
    });
}