import { Component} from "./component.js";
import  { IMAGE_LIST} from "../image-list.js";

export class Thumbnails extends Component   {
    // init(){
    //     this.root.innerHTML = this.displayList(IMAGE_LIST);
    // }

    init(){
        this.root.innerHTML = Thumbnails.displayList(IMAGE_LIST);
    }

    // classiquement on est attaché au prototype, ici on utilise static
    // la on est attaché au constructeur (notre class, en JS c'est pareil)
    
    static displayList(list) {
      const htmlImgArray = list.map(img => `<li><img src="img/${img}"/></li>`);
      const htmlImgString = htmlImgArray.join('');
      return `<ul>${htmlImgString}</ul>`;
    }
};