class SingleDog {
    constructor(vardas, spalva, veisle) {
        this.name = vardas;
        this.color = spalva;
        this.breed = veisle;
        this.speed = 0;
        this.isRunning = false;
        this.isSitting = true;

    }

    introduce(){
        console.log(`Labas, as esu ${this.name} (${this.breed}) ir mano kailis yra ${this.color}`);

    }

    move(speedChange) {
        this.speed += speedChange;
        console.log(this.name, '->', this.speed);
    }

    addLovedPerson(personName ) {
        this.lovedPeople.push(personName);
        console.log(this.lovedPeople);
    }

}

export { SingleDog }