console.log( 'hello !' );

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

class Thief extends Character {

    constructor(jsonThief) {
        // super() est le constructeur du parent (Character)
        // En JS on doit obligatoirement l'appeler en premier dans le constructeur enfant
        super(jsonThief);

        /* 
        Opérateur ternaire
        variableAAssigner = testCondition ? valeurSiVrai : valeurSiFaux;
        */
        let valeurLuck = (this.luck != undefined) ? this.luck * 1.5 : 100;
        this.luck = valeurLuck;
    }

    picklock() {
        console.log( 'Crochetage en cours ...' );
    }

    // On peut surcharger une méthode parente pour redéfinir totalement son fonctionnement
    // Mais ce n'est pas obligatoire
    walk() {
        // super.walk();
        console.log( 'Je marche discrètement ...' );
    }

}

class SpellCaster extends Character {

    mana;

    constructor( jsonSpellCaster ) {
        super( jsonSpellCaster );
        this.mana = jsonSpellCaster.mana;
    }

    cast() {
        console.log( 'Je jette un sort' );
    }

}

class Wizard extends SpellCaster {

    cast() {
        super.cast();
        console.log( 'Mais de manière courtoise...' );
    }

}

let bilbo = new Thief({
    nickname: 'Bilbo Baggins',
    hp: 150,
    armor: 150,
    luck: 100
});

console.log( bilbo );
bilbo.walk();

let gandalf = new Wizard({
    nickname: 'Mithrandir',
    hp: 200,
    armor: 50,
    luck: 100,
    mana: 150
});

console.log( gandalf );
gandalf.cast();