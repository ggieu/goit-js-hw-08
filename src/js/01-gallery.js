// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

let lightbox;
const gallery = document.querySelector(".gallery")
const item = galleryItems.map(({preview, original, description}) => {
    return `<li class ="gallery_item">
    <a class="gallery_link" href="${original}">
    <img
    loading = "lazy"
    class ="gallery_image"
    src="${preview}"
    alt ="${description}"
    />
    </a>
    </li>`;
}).join("");
gallery.insertAdjacentHTML("beforeend", item);
gallery.addEventListener("click", (evt) => evt.preventDefault())


lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: 'alt',
    captionPosition: 'bottom',
});
console.log(galleryItems);
