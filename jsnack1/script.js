//Array elenco

const elencoPersonaggi = [
  {
    nome: 'Harry',
    cognome: 'Potter',
    eta: 17
  },
  {
    nome: 'Hermione',
    cognome: 'Granger',
    eta: 17
  },
  {
    nome: 'Ron',
    cognome: 'Weasley',
    eta: 17
  },
  {
    nome: 'Albus',
    cognome: 'Silente',
    eta: 150
  },
  {
    nome: 'Luna',
    cognome: 'Lovegood',
    eta: 15
  },
  {
    nome: 'Rubeus',
    cognome: 'Hagrid',
    eta: 95
  },
  {
    nome: 'Severus',
    cognome: 'Piton',
    eta: 64
  },
  {
    nome: 'Minerva',
    cognome: 'Mcgranitt',
    eta: 80
  },
]

console.log(elencoPersonaggi)

//filtro l'array per trovare i minorenni
const minorenni = elencoPersonaggi.filter(personaggio => personaggio.eta < 18);
//Stampo in pagina
const elencoMinorenni = document.getElementById('minorenni');
elencoMinorenni.innerHTML = `
<ul>
  ${minorenni.map(personaggio => ` <li>${personaggio.nome} ${personaggio.cognome}, età ${personaggio.eta}</li>`).join('')}
</ul>
`;

//filtro l'array per trovare gli over 65
const over65 = elencoPersonaggi.filter(personaggio => personaggio.eta > 65);
//Stampo in pagina
const elencoOver = document.getElementById('over65');
elencoOver.innerHTML = `
<ul>
  ${over65.map(personaggio => `
  <li>${personaggio.nome} ${personaggio.cognome}, età ${personaggio.eta}</li>`).join('')}
</ul>
`;

