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