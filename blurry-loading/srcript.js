let i = 0;
const contagem = document.querySelector('.contagem');


// Intervalo para aumentar a porcentagem
const intervalo = setInterval(() => {
    if (i < 100) {
        i++;
        contagem.innerHTML = `${i}%`;   

        // Diminuindo a opacidade da porcentagem (ela vai sumindo gradualmente)
        contagem.style.opacity = 1 - (i / 90); // A opacidade vai de 1 até 0
    } else {
        clearInterval(intervalo);
    }
}, 30); // Intervalo entre cada aumento da porcentagem
