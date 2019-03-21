import {
    Gallery
} from "./gallery.js";

// "DOMcontentLoaded" un peu plus performant que "load"
document.addEventListener("DOMContentLoaded", function () {
    const galleryElt = document.querySelector(".gallery");
    const gallery = new Gallery(galleryElt);
    gallery.init();
});