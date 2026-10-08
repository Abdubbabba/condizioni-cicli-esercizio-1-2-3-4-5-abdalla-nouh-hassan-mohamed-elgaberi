let scelta;

do {
    scelta = Number(prompt("Inserisci un numero:\n1 - Acqua\n2 - Coca Cola\n3 - Birra"));

    switch (scelta) {
        case 1:
            console.log("E’ stata selezionata l’acqua");
            break;
        case 2:
            console.log("E’ stata selezionata coca cola");
            break;
        case 3:
            console.log("E’ stata selezionata birra");
            break;
        default:
            console.log("Selezione non valida! Riprova.");
            break;
    }
} while (scelta !== 1 && scelta !== 2 && scelta !== 3);