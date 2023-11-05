import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const listEl = document.querySelector('.gallery')

const typset = galleryItems.map(({ preview, original, description }) => {
    return `
<li style="margin: 20px;list-style: none;" class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img loading="lazy" class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`}).join('');

listEl.insertAdjacentHTML("beforeend", typset)

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: 'alt',
    captionPosition: 'bottom',
});