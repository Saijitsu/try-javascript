const xhr = new XMLHttpRequest();
// xhr => XMLHttpRequest
xhr.open ('get', '/contact.html');

xhr.addEventListener ('load', function(){
    // this vaut l'objet XMLHttpRequest

    if (this.statusCode >= 200 && this.statusCode < 300) {
        console.log(this.reponseText);
    }
});

// Ici les entêtes
xhr.setRequestHeader('Accept', 'text/html');

// Ici le body
xhr.send();