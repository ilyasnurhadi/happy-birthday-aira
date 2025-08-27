function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = Math.random() > 0.5 ? "🌷" : "🩷"; 
    
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (3 + Math.random() * 5) + "s";
    
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 8000);
}

setInterval(createFlower, 300);