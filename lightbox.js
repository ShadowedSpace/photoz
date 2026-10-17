function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = src;
    lightbox.style.display = "flex";
    document.body.classList.add("lightbox-open");
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.classList.remove("lightbox-open");
}