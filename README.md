# Aujourd'hui il y a du Javascript au menu!

### Comment se présente notre affaire?

Si plusieurs méthodes existe, la plus courante pour appeler votre script Javascript est celle-ci:<br/>
![alt scriptJS](https://image.noelshack.com/fichiers/2019/12/1/1552901291-capture.png)<br/>
On appel le script en fin du contenu body pour laisser au navigateur le temps de charger le reste du contenu de la page.

## Avant-propos: qu'est-ce que Javascript?

**consulter ce qu'est Javascript: https://developer.mozilla.org/fr/docs/Web/JavaScript**<br/>
** Je vous connseil vivement de commencer par les bases dans un "ordre logique": https://developer.mozilla.org/fr/docs/Apprendre/Commencer_avec_le_web/Les_bases_JavaScript ** <br/>
L'ordre d'apprentissage proposé par Mozilla me parait idéal:
- variables
- commentaires
- opérateurs
- structures conditionnelles
- fonctions
- événements

#### La structure du code:

Une instruction de bloc est utilisée afin de grouper zéro ou plusieurs instructions. Le bloc est délimité par une paire d'accolades. On peut éventuellement « étiqueter » un bloc avec un label.

- bloc simple:
``{
  instruction_1;
  instruction_2;
  ...
  instruction_n;
}``

- étiqueté:
``// ou, avec une étiquette :
label {
  instruction_1;
  instruction_2;
  instruction_n;
}``
## Les variables

L'instruction **var** (pour variable) permet de déclarer une variable et éventuellement d'initialiser sa valeur.<br/>
``var nomVar1 [= valeur1] [, nomVar2 [= valeur2] ... [, nomVarN [= valeurN]]];``<br/>

- Le nom de la variable, cela peut être n'importe quel identifiant valide.
- La valeur initiale à affecter à la variable, cela peut être n'importe quelle expression valide. S'il n'y a aucune valeur fournie,
la variable vaudra undefined.

#### Pourquoi utiliser des variables?

Pourquoi a-t-on besoin de variables ? Et bien parce qu'elles sont essentielles à la programmation. **Si les valeurs ne pouvaient pas changer, on ne pourrait rien faire de dynamique**, comme personnaliser un message de bienvenue ou changer l'image affichée dans une galerie.

#### plus d'indications ici: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var

- L'instruction **let** permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.
- let permet de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées. Le mot-clé var, quant à lui,
permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).<br/>
- La déclaration **const** permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur
contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante 
ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.<br/>

#### Comment utiliser var, let, const?

**un article sur le sujet:** https://www.angularchef.com/recette/49/ <br/>
**const** et **let** sont les deux mots-clé permettant de déclarer une variable, en JavaScript (à partir de **ES6**) et en **TypeScript**.<br/>
**Pour bien comprendre l'évolution je vous suggère de regarder les évolutions avant et après ES6.**<br/>

**Best practice**: Utilisez const dans 90% des cas, let le reste du temps. <br/>
En fréquence, on utilise const quasiment tout le temps, car: <br/>
- 1: on a rarement besoin de réassigner une variable ;
- 2: on manipule souvent des objets et des tableaux plutôt que des primitives,
et const autorise les modifications dans un objet ou dans un tableau.

#### Les différents types de variables:

![alt lesTypes](https://image.noelshack.com/fichiers/2019/12/1/1552904342-capture2.png) <br/>

##### Précision, car non vu en cours et essentiel:
- La valeur **null** est un littéral JavaScript représentant la nullité au sens où aucune valeur pour l'objet n'est présente. C'est une des valeurs primitives de JavaScript.
- La propriété globale **undefined** représente la valeur undefined. Cette valeur est l'un des types primitifs de JavaScript. (Une variable pour laquelle aucune valeur n'a été assignée sera de type undefined. Une méthode ou instruction renvoie également undefined si la variable à évaluer n'a pas de valeur assignée. Une fonction renvoie undefined si aucune valeur n'a été retournée.)
- Vu mais non détaillé: La propriété globale **NaN** est une valeur utilisée pour représenter une quantité qui n'est pas un nombre (Not a Number en anglais).

## commentaires

`` // Je commente une ligne``<br/>
`` /* Je commente plusieurs lignes en les encapsulants */ ``

## opérateurs

Les opérateurs arithmétiques utilisent des valeurs numériques (variables ou littéraux) comme opérandes et renvoient une valeur numérique. Les opérateurs arithmétiques standard sont l'addition (+), la soustraction (-), la multiplication (*), et la division (/).<br/>
**La version rapide:** <br/>
![alt operateurs](https://image.noelshack.com/fichiers/2019/12/1/1552904342-capture2.png)<br/>

**Guide de survie ici: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_arithm%C3%A9tiques**

### L'égalité en JS, qui mériterait un cours à elle seule:

EcmaScript6 (ES6) possède trois outils pour déterminer si deux valeurs x et y sont « égales ».  Il y a l'égalité simple (deux signes égal) (**==**), l'égalité stricte (trois signes égal) (**===**), et la **méthode Object.is**. (Cette méthode a été ajoutée avec ES6. Les opérateurs d'égalité simple et stricte étaient présents en JavaScript avant ES6 et ont conservé leur comportement.)<br/>
``x == y``<br/>
``x === y``<br/>
``Object.is(x, y)``<br/>

En résumé : l'opérateur d'égalité simple (**==**) effectuera une conversion de type entre les objets comparés, l'opérateur d'égalité stricte (**===**)n'effectuera pas de conversion avant de comparer les objets (false est renvoyé automatiquement si les types sont différents), enfin **Object.is** se comportera de la même façon que l'opérateur d'égalité stricte avec des règles supplémentaires pour les valeurs NaN, -0 et +0. Object.is(-0, +0) ne sera pas vérifié et Object.is(NaN, NaN) sera vrai.

## structures conditionnelles
## fonctions
## événements




