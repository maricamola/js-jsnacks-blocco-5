 js-jsnacks
===
## Descrizione

**jSnack 1**

Abbiamo un elenco utenti (nome, cognome, età).
Trovare i minorenni e gli over 65

**jSnack 2**

Abbiamo un elenco degli studenti di una facoltà
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti

**BONUS**

Aggiungere la foto o l’avatar dello studente e stampare tutti gli studenti con delle card HTML in ordine alfabetico per cognome

**jSnack 4**

Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...
1) Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2) Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3) Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120
Questo è l’elenco degli studenti:
Id  Name                             Grades
213 Marco della Rovere    78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini           74
196 Luigi Grimaldello 	    68
102 Piero della Francesca 50
120 Francesca da Polenta  84
(NB: Si inverte l’ordine delle lezioni objects 3 e 2)

**jSnack 5**

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

**jSnack 6**

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.

**BONUS**

Stampare in pagina oltre che in console!


## Steps
**jSnack 1**

1) Creo un array con nomi,cognomi ed età

2) Con il metodo .filter cerco gli under 18

3) Con lo stesso metodo filtro l'array per cercare gli over 65

4) Stampo il risultato in pagina.

**jSnack 2**

1) Creo array studenti con nomi,cognomi, numero di matricola e    voti

2) Seleziono il container

3) Creo un nuovo array con map 

4) Utilizzo il ciclo foreach per aggiungere tutto nella mia card.


**jSnack 4**

1) Creo array con i dati degli studenti

2) Li trasformo in uppercase utilizzando un ciclo for 

3) Filtro gli studenti che hanno un totale di voti superiore a 70

4) Filtro gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

5) Stampo in pagina

