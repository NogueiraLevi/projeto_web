// Configuração do Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Definir o tamanho do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Classe Bola
class Bola {
    constructor(x, y, radius, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    // Método para desenhar a bola
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 5, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Método para atualizar a posição da bola
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Verifica se a bola bateu nas bordas da tela e inverte a direção
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }

        this.draw();
    }
}

// Criar bolinhas douradas
let bolas = [];
const numBolas = 30;

for (let i = 0; i < numBolas; i++) {
    const radius = Math.random() * 15 + 5; // Tamanho aleatório da bola
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const speedX = (Math.random() - 0.5) * 2; // Velocidade aleatória
    const speedY = (Math.random() - 0.5) * 2;
    const color = '#FFD700'; // Cor dourada

    bolas.push(new Bola(x, y, radius, color, speedX, speedY));
}

// Função para animar o efeito
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas a cada quadro
    bolas.forEach(bola => bola.update()); // Atualiza e desenha cada bola
    requestAnimationFrame(animate); // Requisição para o próximo quadro
}

animate(); // Iniciar a animação

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".typing-effect");
    const text = textElement.textContent;
    let index = 0;

    textElement.textContent = ""; // Limpa o texto inicial

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Velocidade da digitação (ajustável)
        }
    }

    typeEffect();
});
