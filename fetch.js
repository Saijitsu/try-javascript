fetch('tux.json')
.then(reponse => reponse.json())
.then(data => console.log(data));

// la même chose que xmlhttprequest en fetch (principe d'écriture)
// c'est ici: https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch