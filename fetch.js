fetch('tux.json')
    .then(reponse => reponse.json())
    .then(data => {
        return new Promise(function (resolve, reject) {
            if (typeof data !== Array) {
                reject('data must be an array');
            } else {
                resolve(data);
            }
        });
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

// la même chose que xmlhttprequest en fetch (principe d'écriture)
// c'est ici: https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch