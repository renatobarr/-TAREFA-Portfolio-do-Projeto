
let index = 0;
const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
const dots = document.querySelectorAll(".dot");
const total = images.length;

function showSlide(i) {
    index = i;
    track.style.transform = `translateX(${-index * 100}%)`;

    // Atualiza bolinhas
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % total;
    showSlide(index);
}

// Troca automática a cada 4s
setInterval(nextSlide, 4000);

// Clique nas bolinhas
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
});

// Inicializa
showSlide(0);

