// Giriş tıklama
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

intro.addEventListener("click", () => {
    // konfeti patlat
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // intro kaybol
    intro.style.display = "none";

    // ana içerik aç
    mainContent.style.display = "block";

    // müzik başlat
    music.play();
});

// Slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);
