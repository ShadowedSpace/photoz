
const featured = [
    "Featured/featured1.jpg",
    "Featured/featured2.jpg",
    "Featured/featured3.jpg",
];

let currentPhoto = 0;

const featuredPhoto = document.getElementById("featured-photo");
const photoCounter = document.getElementById("photo-counter");

function showFeaturedPhoto(index) {
    currentPhoto = (index + featured.length)
        % featured.length;

    featuredPhoto.src = featured[currentPhoto];
    photoCounter.textContent =
        `${currentPhoto + 1} / ${featured.length}`;
}

document.getElementById("next-photo").addEventListener("click", () => {
    showFeaturedPhoto(currentPhoto + 1);
});

document.getElementById("prev-photo").addEventListener("click", () => {
    showFeaturedPhoto(currentPhoto - 1);
});

featuredPhoto.addEventListener("click", () => {
    openLightbox(featuredPhoto.src);
});
