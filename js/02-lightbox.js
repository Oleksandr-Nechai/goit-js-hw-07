import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryDiv = document.querySelector('.gallery');
console.log(galleryItems);
const galeryItemHtml = galleryItems
  .map(
    i =>
      `<li><a class="gallery__item" href=${i.original}><img class="gallery__image" src=${i.preview} alt=${i.description} /></a></li>`,
  )
  .join('');

galleryDiv.insertAdjacentHTML('beforeend', galeryItemHtml);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
