/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

const Sec = 12560

var Hour = (Sec/60)/60
var M = (Sec - (Math.round(Hour))*60*60)/60
var S1 =  (Math.round(M)*60) +(Math.round(Hour)*60*60)
var S2 = Sec - S1


console.log(Math.round(Hour),Math.round(M),S2)
