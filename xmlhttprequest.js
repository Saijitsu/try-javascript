const xhr = new XMLHttpRequest();
// xhr => XMLHttpRequest
xhr.open ('get', '/contact.html');

xhr.addEventListener ('load', function(){
    // this vaut l'objet XMLHttpRequest

    if (this.statusCode >= 200 && this.status < 300) {
            // tout va bien, la réponse a été reçue
        console.log('Tout va bien, mon contenu: ', this.reponseText);
        /*   avec un contenu JSON => console.log(JSON.parse(this.reponseText));
        La méthode JSON.parse() analyse une chaîne de caractères JSON et construit
        la valeur JavaScript ou l'objet décrit par cette chaîne.
         On peut éventuellement utiliser cette fonction avec un
         paramètre de modification permettant de traiter l'objet avant qu'il soit renvoyé.
         */

    } else {
    // il y a eu un problème avec la requête,
    // par exemple la réponse peut être un code 404 (Non trouvée) 
    // ou 500 (Erreur interne au serveur)
        console.log('Un problème dans ma requête: ', this.reponseText);
    }
});

// Ici les entêtes
xhr.setRequestHeader('Accept', 'text/html');

// Ici le body
// Cette méthode prend en paramètre un argument obligatoire
xhr.send(null);
