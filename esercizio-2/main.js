//let temp = Number(prompt("Scrivi la temperatura attuale"));

//if (temp < -10){
//    console.log("copriti…che ti raffreddi");
    
//}else if (temp < 0){
//    console.log("non e’ tanto il freddo quanto l’umidità");
    
//}else if (temp < 20){
//   console.log("non ci sono piu’ le mezze stagioni");
    
//}else if (temp < 30){
//    console.log("stampare “mi dia una peroni sudata");
    
//}else (temp >= 30){
//    console.log("lu mare, lu sule e lu ientu");

    
//}

let temp = Number(prompt("Scrivi la temperatura attuale"));

switch (true){
    case (temp < -10):
        console.log("copriti…che ti raffreddi");
        break;

    case (temp < 0):
        console.log("non e’ tanto il freddo quanto l’umidità'");
        break;

    case (temp < 20):
        console.log("non ci sono piu’ le mezze stagioni");
        break;

    case (temp < 30):
        console.log("mi dia una peroni sudata");
        break;
    
    default:
            console.log("lu mare, lu sule e lu ientu");
            break;
}