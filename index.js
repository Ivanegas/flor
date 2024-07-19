document.getElementById('nombre').addEventListener('click', function () {
    var cancion = document.getElementById('cancion');
    if (cancion.paused) {
        cancion.play();
    } else {
        cancion.pause();
    }

    showNextCard(1);
});

function showNextCard(cardNumber) {
    var currentCard = document.getElementById('card' + cardNumber);
    if (currentCard) {
        currentCard.classList.add('show');
        currentCard.addEventListener('click', function () {
            currentCard.classList.remove('show');
            showNextCard(cardNumber + 1);
        });
    }
}