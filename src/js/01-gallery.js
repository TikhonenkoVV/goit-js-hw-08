// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(simpleLightbox);
const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems.reduce(
    (html, el) =>
        html +
        `<a class="gallery__item" href="${el.original}">
            <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
        </a>`,
    ''
);

new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});
