
let gallerySection = document.querySelector(".gallery");
let modal = document.querySelector('dialog');
const closeButton = modal.querySelector('.close-viewer');

gallerySection.addEventListener('click', (event) => {

    if (event.target.src !== undefined) {
        let modalImage = modal.querySelector('img');
        modalImage.src = event.target.src.replace('-sm', '-full');
        modal.showModal();
    }

});


    // Close modal on button click
    closeButton.addEventListener('click', () => {
        modal.close();
    });

    // Close modal if clicking outside the image
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
    