//Creo array studenti
const studenti= [
  'Brezza Marina',
  'Ragno Felice',
  'Testa Incoronata',
  'Lasagna Emiliana',
  'Pagella Scolastica',
  'Campo fiorito',
  'Aceto Genuino',
  'Piano Guido'
];

//Seleziono il container
const container = document.querySelector('.container');

//Con map creo la nuova array chiamata 'listaStudenti'. La funzione di callback mi restituisce nome,matricola, voto.
const listaStudenti = studenti.map((studente, i) => ({nome: studente, matricola: 46789 + i , voto: 7.4 + i}));

console.log(listaStudenti)

listaStudenti.forEach((student) => {
  const {nome, matricola, voto} = student;
  const card =`
  <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Studente: ${nome}</h5>
          <p class="card-text">Numero di matricola: ${matricola}</p>
          <p class="card-text">Voto: ${voto}</p>
        </div>
      </div>
  `
  container.innerHTML += card;
});