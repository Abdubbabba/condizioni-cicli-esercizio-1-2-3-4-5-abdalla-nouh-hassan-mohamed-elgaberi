let sommaDispari = 0;
let conteggioDispari = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        sommaDispari += i;
        conteggioDispari++;
    }
}

let mediaDispari = sommaDispari / conteggioDispari;
console.log(mediaDispari);