const slider = document.getElementById('slider');

function slideLeft() {
  slider.scrollBy({ left: -250, behavior: 'smooth' });
}

function slideRight() {
  slider.scrollBy({ left: 250, behavior: 'smooth' });
}

function toggleFavorite(heart) {
  heart.classList.toggle('active');
}
