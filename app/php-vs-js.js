console.log('Hello !');

// La classe 
class Character { 
    // Déclaration de propriétés statiques
    static counter = 0;

    //Déclaration de propriétés publiques
    hp;
    armor;
    luck;
 // Déclaration d'une méthode statique 
 static getCounter() {
// dans uen méthode statique, "this" est équivalent à " self" en PHP. 
//Dans le contexte d'une méthode statique, "this" fait référence à la classe 
//retun this.counter;
//On peut aussi utiliser ce type d'apelle qui est identique à celui du contexte non statique
// pour des raison de lisibilité on privilégie cette forme. 
 return Character.counter;
}

    //Cnnstructeur
    constructor(jsonCharacter) {
        //Dans le contexte d'une méthode statique, "this" fait référence à l'instance actuelle" 
        //Appel d'un propriété statique dans un contexte non statique
        Character.counter ++;
        this.hp = jsonCharacter.hp;
        this.armor = jsonCharacter.armor;
        this.luck = jsonCharacter.luck;
    }

    //Déclaration de méthode publiques
    walk() {
        console.log('Je marche');
    }
}
class Spellcaster extends Character {

    mana;
    constructor (jsonspellcaster){
    super(jsonspellcaster);
    this.mana = jsonspellcaster.mana;
    }

    cast(){
        console.log ('Je jette un sort');
    }
}

class Wizard extends Spellcaster {

    cast() {
        super.cast();
        console.log('Mais de manière courtoise');
    }

}
class Thief extends Character {

    constructor(jsonThief) {
        // Super est le constructeur du parent (Character)
        // En JS on doit obligatoirement l'appeler en premier dans le constructeur enfant
        super(jsonThief);
        this.luck = jsonThief.luck * 1.5;
    }

    picklock() {
        console.log('Crochetage en cours ...');
    }
//On peu surcharger une methode parente pour redezfinir totalement son fonctionnement
//Mais ce n'est pas obligatoire
    walk() {
        console.log('Je marche silencieusement ...');
    }
}

let bilbo = new Thief( {
    hp: 150,
    armor: 150,
    luck: 100
});
console.log(bilbo);
bilbo.walk();
//let gandalf = new Character();
//console.log(gandalf);


let gandalf = new Wizard({
    hp: 200,
    armor: 50,
    luck: 100,
    mana: 150, 
});
console.log(gandalf);
gandalf.cast();