import {
    Viewer
} from "./component/viewer.js";
import {
    Thumbnails
} from "./component/thumbnails.js";
import {
    Component
} from "./component/component.js";
import {
    Login
} from "./component/login.js";

// ici on a une syntaxe de class, mais en réalité il s'agit d'un prototype
// rappel: javascript est centré sur le mécanisme de prototypage
export class Gallery extends Component {
    // language courant: méthode, en réalité fonction attachée sur une propriété
    // En l'occurence ici, fonction attachée sur un prototype
    init() {
        this.root.innerHTML = `
        <h1>Ma super galerie!<h1>
        <div class="component login-component"></div>
        <div class="component viewer-component"></div>
        <div class="component thumbnails-component"></div>
        `;
        // const viewerElt = this.root.querySelector('.viewer-component');
        // const viewer = new Viewer(viewerElt);
        const viewer = new Viewer(this.root.querySelector('.viewer-component'));
        viewer.init();
        const thumbnails = new Thumbnails(this.root.querySelector('.thumbnails-component'));
        thumbnails.init();
        const loginElt = this.root.querySelector('.login-component');
        const login = new Login(loginElt);
        login.init();
    }
}