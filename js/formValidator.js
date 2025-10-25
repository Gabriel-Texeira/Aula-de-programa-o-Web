document.addEventListener("submit", function (e) {
  if (e.target.id === "userForm") {
    e.preventDefault();
    const nome = e.target.nome.value.trim();
    const email = e.target.email.value.trim();
    const message = document.getElementById("formMessage");

    if (!nome || !email.includes("@")) {
      message.textContent = "Preencha corretamente todos os campos.";
      message.style.color = "red";
    } else {
      message.textContent = "Formulário enviado com sucesso!";
      message.style.color = "green";
      localStorage.setItem("formData", JSON.stringify({ nome, email }));
    }
  }
});