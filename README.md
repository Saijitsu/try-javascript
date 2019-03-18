#Aujourd'hui il y a du Javascript au menu!

###Comment se présente notre affaire?

Si plusieurs méthodes existe, la plus courante pour appeler votre script Javascript est celle-ci:<br/>
![alt scriptJS](https://image.noelshack.com/fichiers/2019/12/1/1552899084-capture.png)<br/>
On appel le script en fin du contenu body pour laisser au navigateur le temps de charger le reste du contenu de la page.

## Les variables

L'instruction **var** (pour variable) permet de déclarer une variable et éventuellement d'initialiser sa valeur.<br/>
``var nomVar1 [= valeur1] [, nomVar2 [= valeur2] ... [, nomVarN [= valeurN]]];``<br/>
- Le nom de la variable, cela peut être n'importe quel identifiant valide.
- La valeur initiale à affecter à la variable, cela peut être n'importe quelle expression valide. S'il n'y a aucune valeur fournie,
la variable vaudra undefined.

#### plus d'indications ici: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var

- L'instruction **let** permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.
- let permet de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées. Le mot-clé var, quant à lui,
permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).<br/>
- La déclaration **const** permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur
contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante 
ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.<br/>

#### Comment utiliser var, let, const?

- **un article sur le sujet:** https://www.angularchef.com/recette/49/ <br/>
**const** et **let** sont les deux mots-clé permettant de déclarer une variable, en JavaScript (à partir de **ES6**) et en **TypeScript**.<br/>
**Pour bien comprendre l'évolution je vous suggère de regarder les évolutions avant et après ES6.**<br/>

**Best practice**: Utilisez const dans 90% des cas, let le reste du temps. <br/>
En fréquence, on utilise const quasiment tout le temps, car: <br/>
- 1) on a rarement besoin de réassigner une variable ;
- 2) on manipule souvent des objets et des tableaux plutôt que des primitives,
et const autorise les modifications dans un objet ou dans un tableau.



