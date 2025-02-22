function toggleGallery() {
    const gallery = document.getElementById('gallery');
    gallery.style.display = gallery.style.display === 'flex' ? 'none' : 'flex';
}

function showLoveDate() {
    const loveDate = document.getElementById('love-date');
    loveDate.style.display = loveDate.style.display === 'block' ? 'none' : 'block';
}

function toggleAudio() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
