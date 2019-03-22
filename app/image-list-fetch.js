// version ES6:
// export class ImageListFetch {
//    static getList(){
//        return fetch('tux.json').then(response => response.json())
//    }
// }

// version ES6 avec callback, nécéssite de repasser le traitement en parametre:
// export class ImageListFetch {
//    static getList(callback){
//        return fetch('tux.json')
// .then(response => response.json())
// .then(callback)
//    }
// }


// version JS à jour:
export class ImageListFetch {
    static async getList() {
        const response = await fetch('tux.json');
        return await response.json();
    }
}