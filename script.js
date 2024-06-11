document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('background-music').play();
});

function openPresent() {
    document.getElementById('present').style.display = 'none';
    document.getElementById('message').classList.remove('hidden');
    showFlowersAndHearts();
}

function showFlowersAndHearts() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 25; i++) {  // Aumentar o número de elementos de 10 para 30
        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.left = Math.random() * 100 + 'vw';
        rose.style.top = Math.random() * 100 + 'vh';
        rose.style.backgroundImage = 'url(https://i.ibb.co/wCZqZgX/rosa-removebg-preview.png)';
        rose.style.width = '50px';
        rose.style.height = '50px';
        rose.style.backgroundSize = 'contain';
        rose.style.backgroundRepeat = 'no-repeat';
        container.appendChild(rose);

        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.backgroundImage = 'url("https://i.ibb.co/DgpB4JC/coracao-removebg-preview.png")';
        heart.style.width = '50px';
        heart.style.height = '50px';
        heart.style.backgroundSize = 'contain';
        heart.style.backgroundRepeat = 'no-repeat';
        container.appendChild(heart);
    }
}
