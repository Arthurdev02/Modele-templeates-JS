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