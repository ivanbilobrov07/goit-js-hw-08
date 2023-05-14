import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
import { createGalleryMarkup } from './01-helpers/createMarkup';

const galleryListRef = document.querySelector('.gallery');

const GalleryMarkup = createGalleryMarkup(galleryItems);
galleryListRef.innerHTML = GalleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
