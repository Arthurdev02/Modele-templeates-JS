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
