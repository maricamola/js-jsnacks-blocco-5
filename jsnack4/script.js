//Array students
const students = [
  {
    id: 213 ,
    name: 'Marco della Rovere',
    votes: 78
  },
  {
    id: 110 ,
    name: 'Paola Cortellessa',
    votes: 96
  },
  {
    id: 250 ,
    name: 'Andrea Mantegna',
    votes: 48
  },
  {
    id: 145 ,
    name: 'Gaia Borromini',
    votes: 74
  },
  {
    id: 196 ,
    name: 'Luigi Grimaldello',
    votes: 68
  },
  {
    id: 102 ,
    name: 'Piero della Francesca',
    votes: 50
  },
  {
    id: 120 ,
    name: 'Francesca da Polenta',
    votes: 84
  },
];

//Creo ciclo per incrementare nell'array le maiuscole
const namesUpperCase = [];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const nameUpperCase = student.name.toUpperCase();
  namesUpperCase.push(nameUpperCase);
}

//Upper 70
const studentsUpper70 = students.filter(student => student.votes > 70);

//Upper 70 & Upper 120
const studentsUpper70id120 = students.filter(student => student.votes > 70 && student.id > 120);

//Stampo in pagina
const nameList = document.getElementById('names-list');
const nameList70 = document.getElementById('names-list70');
const nameList120 = document.getElementById('names-list120');

//Concateno la stringa e uso map per ricreare l'array e join che mi serve per unire gli elementi nel nuovo array in una singola stringa, con una stringa vuota come separatore.

nameList.innerHTML = '<ul>' + namesUpperCase.map(name => `<li>${name}</li>`).join("") + "</ul>";

nameList70.innerHTML = '<ul>' + studentsUpper70.map(student => `<li>${student.name}</li>`).join("") + "</ul>";

nameList120.innerHTML = '<ul>' + studentsUpper70id120.map(student => `<li>${student.name}</li>`).join("") + "</ul>";










