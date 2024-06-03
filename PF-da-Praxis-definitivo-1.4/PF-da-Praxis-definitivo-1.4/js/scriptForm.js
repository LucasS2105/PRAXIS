const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulário enviado");

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const urlWhatsapp = `https://wa.me/75999997491?text= Olá! Meu nome é: ${encodeURIComponent(
        nome
    )}, meu email é ${encodeURIComponent(
        email
    )} e meu telefone é ${encodeURIComponent(
        telefone
    )}. Gostaria de saber mais informações sobre a clínica.`;

    window.open(urlWhatsapp, "_blank");
});
