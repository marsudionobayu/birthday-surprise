// Autoplay musik setelah interaksi pengguna dan efek tambahan
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById("bgMusic");
    const startBtn = document.getElementById("startBtn");
    const container = document.querySelector(".container");
    
    // Create floating hearts
    function createHearts() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    // Start floating hearts interval
    setInterval(createHearts, 300);
    
    if (startBtn) {
        startBtn.addEventListener("click", function() {
            // Add click effect
            startBtn.innerHTML = "🎀 Loading...";
            startBtn.style.background = "#b52a5a";
            
            // Play music with fade in
            music.volume = 0;
            music.play();
            const fadeIn = setInterval(() => {
                if (music.volume < 0.8) {
                    music.volume += 0.1;
                } else {
                    clearInterval(fadeIn);
                }
            }, 200);
            
            // Add container animation
            container.classList.add("heart-beat");
            
            setTimeout(() => {
                window.location.href = "gallery.html";
            }, 1500);
        });
    }
});