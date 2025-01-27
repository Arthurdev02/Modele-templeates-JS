console.log('Hello from script.js');

// La classe 😎
class Character  {
    //Déclaration de proriété public
    hp; // Points de vie
    armor; // Armure

    //Déclaration de methode public
    walk() {
        console.log('Je marche');
    }
}

// Création d'une instance de la classe Character
let hero = new Character();
console.log(hero);