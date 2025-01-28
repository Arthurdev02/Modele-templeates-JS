// La classe 😎
class Character {
    // Déclaration de propriétés statiques
    static counter = 0;

    // Déclaration de propriétés publiques
    nickname;
    hp;
    armor;
    luck;

    // Déclaration d'une méthode statique
    static getCounter() {
        // Dans une méthode statique, "this" équivaut au "self" de PHP
        // Dans le contexte statique, this représente la classe
        // return this.counter;
        // On peut aussi utiliser ce type d'appel qui est identique à celui du contexte non-statique
        // Pour des raisons de lisibilité, on va privilégier cette forme
        return Character.counter;
    }

    // Constructeur
    constructor( jsonCharacter ) {
        // Dans le contexte non-statique, this représente l'instance actuelle
        // Appel d'une propriété statique dans un contexte non statique
        Character.counter ++;

        // Design pattern "Hydrator" comme vu en PHP
        let jsonProps = Object.getOwnPropertyNames( jsonCharacter );
        let validProps = jsonProps.filter( p => this.hasOwnProperty(p) );

        for( let prop of validProps ) {
            this[prop] = jsonCharacter[prop];
        }
    }

    // Déclaration de méthode publique
    walk() {
        console.log( 'Je marche' );
    }

    // Méthode "magique" qui indique ce que renvoie l'objet lorsque tente de le convertir en string
    toString() {
        return this.nickname;
    }

    // Méthode "magique" qui indique ce que renvoie l'objet lorsque tente de le convertir en nombre
    valueOf() {
        return this.hp;
    }
}