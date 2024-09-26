const photos = ['./img/foto1.png', './img/foto2.png', './img/foto3.png']; // Substitua pelos nomes das suas fotos
let photoIndex = 0;

// Função para mudar a foto com transição suave
function changePhoto() {
    const photoElement = document.getElementById('photo');
    photoElement.style.opacity = 0; // Deixa a imagem transparente

    setTimeout(() => {
        photoElement.src = photos[photoIndex];
        photoElement.style.opacity = 1; // Volta a opacidade após trocar a foto
        photoIndex = (photoIndex + 1) % photos.length;
    }, 500); // Espera meio segundo antes de trocar a foto
}

setInterval(changePhoto, 10000); // Muda a foto a cada 10 segundos

// Função para calcular o tempo de relacionamento
function updateCounter() {
    const startDate = new Date('2024-07-28'); // Substitua pela data de início do relacionamento
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Ajusta os dias para o mês anterior
    }

    if (months < 0) {
        years--;
        months += 12; // Ajusta os meses para o ano anterior
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const counterElement = document.getElementById('time-counter');
    if (years === 0) {
        counterElement.innerHTML = `
        ${months} meses, 
        ${days} dias<br>
        ${hours} horas, 
        ${minutes} minutos, 
        ${seconds} segundos<br>
        💜
        `;
    } else {
        counterElement.innerHTML = `
        ${years} anos<br>
        ${months} meses<br>
        ${days} dias<br>
        ${hours} horas<br>
        ${minutes} minutos<br>
        ${seconds} segundos<br>
        💜
        `;
    }
}

const music = document.getElementById('background-music');
const playButton = document.getElementById('play-music');
const pauseButton = document.getElementById('pause-music');
const volumeSlider = document.getElementById('volume-slider');

// Play Music
playButton.addEventListener('click', () => {
    music.play();
});

// Pause Music
pauseButton.addEventListener('click', () => {
    music.pause();
});

// Control Volume
volumeSlider.addEventListener('input', (event) => {
    music.volume = event.target.value;
});


setInterval(updateCounter, 1000); // Atualiza o contador a cada segundo
