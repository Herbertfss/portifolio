function enviarWhatsApp(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const telefone = "5585987880314";

  if (!mensagem) {
    showToast("Por favor, escreva uma mensagem antes de enviar.");
    return;
  }

  const texto = `Olá, meu nome é ${nome || "Contato"}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  showToast("Abrindo WhatsApp...");
  window.open(url, "_blank", "noopener");
}

function showToast(text) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
