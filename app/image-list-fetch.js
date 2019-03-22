// version ES6:
// export class ImageListFetch {
//    static getList(){
//        return fetch('tux.json').then(response => response.json())
//    }
// }


// version JS à jour:
export class ImageListFetch {
    static async getList() {
        const response = await fetch('tux.json');
        return await response.json();
    }
}