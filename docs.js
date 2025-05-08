document.getElementById("telaInicial").addEventListener("click", function(){
    window.location.href = "index.html"
});

document.getElementById("comunidade").addEventListener("click", function(){
    window.location.href = "comunidade.html"
});

document.getElementById("quemSomos").addEventListener("click", function(){
    window.location.href = "quemSomos.html"
});

function openPDF() {
    window.open("./docs/vision_informal.pdf", "_blank");
  }
