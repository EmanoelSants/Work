document.addEventListener('DOMContentLoaded', () => {
  const saudacaoElement = document.getElementById('saudacao');
  const agora = new Date();
  const horas = agora.getHours();
  let saudacao;

  if (horas >= 5 && horas < 12) {
    saudacao = 'Bom dia!';
    saudacaoElement.classList.add('text-[#940ee2]');
  } else if (horas >= 12 && horas < 18) {
    saudacao = 'Boa tarde!';
    saudacaoElement.classList.add('text-[#940ee2]');
  } else {
    saudacao = 'Boa noite!';
    saudacaoElement.classList.add('text-[#940ee2]');
  }

  saudacaoElement.textContent = saudacao;
});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Loader
document.addEventListener("DOMContentLoaded", function() {
  // Remove o loader quando a página estiver completamente carregada
  window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content");
    loader.style.display = "none";
    content.style.display = "block";
  });
});
