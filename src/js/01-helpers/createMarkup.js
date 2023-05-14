const createGalleryMarkup = function (galleryMarkupItems) {
  return galleryMarkupItems
    .map(
      item => `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>`
    )
    .join('');
};

export { createGalleryMarkup };
