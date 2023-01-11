import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const allGallery = document.querySelector('.gallery');

function createGalery() {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
  allGallery.insertAdjacentHTML('beforeend', markup);
}

createGalery();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
