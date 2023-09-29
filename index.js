// task2
let numarZile = 1789;

let ani = Math.floor(numarZile / 365);
numarZile %= 365;
let luni = Math.floor(numarZile / 30);
numarZile %= 30;
let saptamani = Math.floor(numarZile / 7);
let zile = numarZile % 7;

let timpEstimat = "Timpul până la finalizarea producției: ";
if (ani > 1) {
    timpEstimat += ani + " ani ";
}
if (luni > 0) {
    timpEstimat += luni + " luni ";
}
if (saptamani > 1) {
    timpEstimat += saptamani + " săptămâni ";
} else if (saptamani === 1) {
    timpEstimat += saptamani + " săptămână ";
}
if (zile > 1) {
    timpEstimat += zile + " zile ";
} else if (zile === 1) {
    timpEstimat += zile + " zi ";
}
if (ani === 0 && luni === 0 && saptamani === 0 && zile === 0) {
    timpEstimat = "Mai puțin de o săptămână";
}

console.log(timpEstimat);
console.log(' ')


// task3
let persoana1 = {
    nume: "Victor",
    hobby: "Ciclism"
};

let persoana2 = {
    nume: "Radu",
    hobby: "Pictură"
};

let persoana3 = {
    nume: "Arina",
    hobby: "Dans"
};

let persoana4 = {
    nume: "Sandra",
    hobby: "Gardening"
};

let persoana5 = {
    nume: "Vladislav",
    hobby: "Condus"
};


function showHobby(name) {
    switch (name) {
        case "Victor":
            console.log(persoana1.hobby);
            break;
        case "Radu":
            console.log(persoana2.hobby);
            break;
        case "Arina":
            console.log(persoana3.hobby);
            break;
        case "Sandra":
            console.log(persoana4.hobby);
            break;
        case "Vladislav":
            console.log(persoana5.hobby);
            break;
        default:
            console.log("Numele persoanei nu a fost găsit.");
    }
}

showHobby("Victor"); 
showHobby("Vladislav"); 
showHobby("Igor");
console.log(' ');

// task4
let anotimp = 'Toamna'
switch (anotimp) {
    case "Toamna":
        console.log('Anotimp, cad frunzele, timpul se racoreste, copacii raman goi.');
        break;
    case "Iarna":
        console.log('Anotimp, ninge, copii se dau cu sania, din hogeacuri iese fum, afara frig, ghetus.');
        break;
    case "Primavara":
        console.log('Anotimp, apar mugurii, florile infloresc, iarba inverzeste, afara se incalzeste.');
        break;
    case "Vara":
        console.log('Anotimp, apar fructele, copii au vacanta, ');
        break;
    default:
        console.log("Acest anotimp nu exista");
};
console.log(' ');

//task5
class Animal {
    constructor(picioare, areCoada) {
        this.picioare = picioare;
        this.areCoada = areCoada;
    }

    sunet() {
        console.log("Sunetul unui animal");
    }
}

class Pisica extends Animal {
    constructor(picioare, areCoada, rasa) {
        super(picioare, areCoada);
        this.rasa = rasa;
    }

    sunet() {
        console.log("Miau!");
    }

    descriere() {
        console.log(`Pisica de rasa ${this.rasa} are ${this.picioare} picioare și ${this.areCoada ? 'are' : 'nu are'} coadă.`);
    }
}

class Caine extends Animal {
    constructor(picioare, areCoada, rasa) {
        super(picioare, areCoada);
        this.rasa = rasa;
    }

    sunet() {
        console.log("Ham!");
    }

    descriere() {
        console.log(`Câinele de rasa ${this.rasa} are ${this.picioare} picioare și ${this.areCoada ? 'are' : 'nu are'} coadă.`);
    }
}

const pisica1 = new Pisica(4, true, "Siameza");
const caine1 = new Caine(4, true, "Labrador");

pisica1.descriere();
caine1.descriere();

pisica1.sunet();
caine1.sunet();

