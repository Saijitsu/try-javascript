// Les façons d'appeler une fonction:

const example1 = function(){
    console.log("example 1");
};

// appel en tant que fonction
example1()

const kity = {
    name:"Felix",
    meow: function() {
        console.log(this.name);
    }
};

// appel en tant que méthode
kitty.meow();

const LittleCat = function(name) {
    this.name = name;
}

LittleCat.prototype.meow = function() {
    console.log("example 1");
};

// appel en tant que constructeur
const bill = new LittleCat("bill");

console.log(bill);

// rappel, dans 90% des cas les données seront propre à l'objet,
// les traitements au prototype (check it)

// appel avec call ou apply
example1.apply(bill);
/* La méthode apply() appelle une fonction
 en lui passant une valeur this et des arguments sous 
 forme d'un tableau (ou d'un objet semblable à un tableau). */

//  // syntaxe de déclaration (éviter)
//  function LittleCat2(){
//  }

//  // syntaxe d'instruction de fonction
//  const exemple = function (name){
//  }