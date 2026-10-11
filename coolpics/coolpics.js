let menuButton = document.querySelector('#mobile');
const modal = document.querySelector('dialog');
const gallerySection = document.querySelector('.gallery');
const closeModal = modal.querySelector('.close-viewer');

menuButton.addEventListener("click", menuToggle);

function menuToggle() {
    let nav = document.querySelector("nav");
    nav.classList.toggle('show');
    // menuButton.classList.toggle('change');
};


gallerySection.addEventListener('click', (event) => {
    if (event.target.src !== undefined) {
        modal.showModal();
           
        let modalImage = modal.querySelector('img');
        modalImage.src = event.target.src.replace('-sm', '-full');
    }
});



closeModal.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});