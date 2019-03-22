export class ImageListXhr {
    getList (callback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'tux.json');
        xhr.addEventListener('load', function(){
            console.log('reponse loaded', this.status);
            if (status>= 200 || this.status >= 300) {
                throw 'Il y a un problème!';
            }
            callback(JSON.parse(this.responseText))
        });
        xhr.send();
    }
};