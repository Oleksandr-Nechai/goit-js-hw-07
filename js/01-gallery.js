import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryDiv = document.querySelector('.gallery');
console.log(galleryItems);
const galeryItemHtml = galleryItems
  .map(
    i =>
      `<div class="gallery__item">
    <a class="gallery__link" href=${i.original}>
      <img
        class="gallery__image"
        src=${i.preview}
        data-source=${i.original}
        alt=${i.description}
      />
    </a>
  </div>`,
  )
  .join('');

galleryDiv.insertAdjacentHTML('beforeend', galeryItemHtml);

galleryDiv.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.className !== 'gallery__image') {
    console.log(event.target.className);
    return;
  }

  let srcLink = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`<img src="${srcLink}" width="600" height="500">`);
  instance.show();

  window.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      return instance.close();
    }
  }
});
