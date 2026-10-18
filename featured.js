
const featured = [
    "Featured/featured1.jpg",
    "Featured/featured2.jpg",
    "Featured/featured3.jpg",
];

let currentPhoto = 0;

const recentPhoto = document.getElementById("featured");
const photoCounter = document.getElementById("photo-counter");

function showFeaturedPhoto(index) {
    currentPhoto = (index + featured.length)
        % featured.length;

    recentPhoto.src = recentPhotos[currentPhoto];
    photoCounter.textContent =
        `${currentPhoto + 1} / ${featured.length}`;
}

document.getElementById("next-photo").addEventListener("click", () => {
    showFeaturedPhoto(currentPhoto + 1);
});

document.getElementById("prev-photo").addEventListener("click", () => {
    showFeaturedPhoto(currentPhoto - 1);
});

recentPhoto.addEventListener("click", () => {
    openLightbox(recentPhoto.src);
});
