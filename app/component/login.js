import {
    Component
} from "./component.js";

export class Login extends Component {

    init() {
        this.root.innerHTML = `
        <form>
            <div>
                <label for="username">Nom d'utilisateur</label>
                <input type="text" id="username" name="username">
            </div>
            <div>
                <label for="passeword">Mot de passe</label>
                <input type="passeword" id="passeword" name="password">
            </div>
            <button>Se connecter</button>
        </form>
    `
        // form button > ajax
        this.root.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault();
            // Récupération des données (this: form)
            console.log(this);
            const data = {
                username: this[0].value,
                passeword: this[1].value
            };
            console.log(data);
            // Envoi des données (test: non fonctionnel ici)
            fetch('login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    // Donne une indication au serveur
                    contentType: 'application/json'
                }
            })
        })
    }
}