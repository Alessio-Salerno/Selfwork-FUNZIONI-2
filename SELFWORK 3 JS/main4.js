
// let array_1 = [
//     ['un', 'per', 'incatenarli.'],
//     ['Anello', 'trovarli,'],
//     ['ghermirli', 'e'],
//     ['gondor', 'mark'],
//   ];
  
// //   ---------------------- \\
// //"Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“


//   let array_2 = [
//     [['trovarli,']],
//     ['tu,', 'sciocchi'],
//     ['tu,', 'sciocchi', ['padron', 'Sauron']],
//     ['nel', ['fuggite', 'gandalf']],
//     [['domarli,', 'passare'], 'buio']
//   ];

// //   ----- \\

// console.log(
//  array_1[1][0],
//  array_1[0][1],
//  array_2[4][0][0],
//  array_1[0][0],
//  //Un anello per domarli,
//  array_1[0][0],
//  array_1[1][0],
//  array_1[0][1],
//  array_2[0][0][0],
// //Un anello per trovarli,
// array_1[0][0],
// array_1[1][0],
// array_1[0][1],
// array_1[2][0],
// // Un anello per ghemirli
// array_1[2][1],
// array_2[3][0],
// array_2[4][1],
// array_1[0][2]
// )

// ---------------------------------- \\

//     // prmopt -> quanti tiri del dado ci devono essere da parte del giocatore
//     let tiri_n_Volte = Number(prompt('Quanti tiri per ciascun giocatore?'), 8);


// // Funzione per richiedere il tiro dei dadi
// function tiroDadi(){
//     return Math.floor(Math.random() * 6) + 1;
// }

// // Punteggi Iniziali dei giocatori 
// punteggioUtente1 = 0;
// punteggioUtente2 = 0;

// // Calcolo Punteggio Utente 1
// // Usando ciclo for

// for(let i = 0; i < tiri_n_Volte; i++){
//     punteggioUtente1 += tiroDadi();
// }


// // Calcolo Punteggio Utente 2
// // Usando ciclo for

// for(let i = 0; i < tiri_n_Volte; i++){
//     punteggioUtente2 += tiroDadi();
// } 

// // Stampando il punteggio dei giocatori 

// console.log(`Il punteggio del giocatore 1 è ${punteggioUtente1}`);
// console.log(`Il punteggio del giocatore 2 è ${punteggioUtente2}`);

// // ------------ \\

// if(punteggioUtente1 > punteggioUtente2){
//     console.log('Giocatore 1 vince');
// }
// else if( punteggioUtente2 > punteggioUtente1){
//       console.log('Giocatore 2 vince');
// }
// else{
//     console.log('non vince nessuno e quindi è un pareggio');
// }

// // richiamo funzione
// tiroDadi();

//  --------------------- \\

// let nVolteBiglie = Number(prompt('Inserisci quante volte tirereanno le biglie i giocatori'));

// function tiroBiglie(){
//     return Math.floor(Math.random() * 5) + 1;
// }

// // Punteggi Giocatori 

// let punteggioGiocatore1 = 0;
// let punteggioGiocatore2 = 0;


// // Ciclo per ottenere i punteggi 

// for(let i = 0; i < nVolteBiglie; i++){
//     punteggioGiocatore1 += tiroBiglie();
// }

// for(let i = 0; i < nVolteBiglie; i++){
//     punteggioGiocatore2 += tiroBiglie();
// }

// // Stampa il punteggio dei giocatori
// alert(`Il giocatore 1 ha totalizzato ${punteggioGiocatore1} punti`);
// alert(`Il giocatore 2 ha totalizzato ${punteggioGiocatore2} punti`);

// // Condizioni Giocatori

// if(punteggioGiocatore1 > punteggioGiocatore2){
//     alert('GIOCATORE 1 VINCE');
// }
// else if(punteggioGiocatore2 > punteggioGiocatore1){
//     alert('GIOCATORE 2 VINCE');
// }
// else {
//     alert("IN QUESTO CASO CI SARA' UN PAREGGIO");
// }

// // Chiudi funzione
// tiroBiglie();






// ---------------------- \\

// ESERCIZIO SELFWORK FUNZIONI 2

/*
Selfwork Funzioni 2
Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
N dovra’ rappresentare il parametro formale della funzione
tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'
*/

// function Rest(N){
//     for(let i = 1; i <= N; i++){
//         if(i % 15 === 0){
//             console.log('fizzBuzz');
//         }
//         else if(i % 3 === 0){
//         console.log('Fizz');
//         }
//         else if(i % 5 === 0){
//             console.log('Buzz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// Rest(100);



// -------------------------------\\
/*
Scrivi una funzione che dato un numero intero positivo (massimo 9999) conti da quante cifre è formato.

Esempio:
Input : 9 → output: 1 cifra
Input : 99 → output: 2 cifre
Input: 12000 → output: Numero troppo grande
*/


function contaCifre(numeri){
    // INSERIRE UNA CONDIZIONE PER CAPIRE SE IL NUMERO È POSITIVO O NEGATIVO
    // IN QUESTO CASO L'OUTPUT TORNA POSITIVO
    if(numeri > 999){
        return "Numero positivo";
    }
    // QUI L'OUTPUT TORNA NEGATIVO 
     if(numeri < 0){
        return "Numero negativo";
    }
    
       return `Il numero ${numeri} è formato da cifre = ${numeri.toString().length} ` 
    }

    console.log(contaCifre(9));
    console.log(contaCifre(200));
    console.log(contaCifre(18));





















