//Array studenti
const students =  [
  {
    id: 213 , 
    name: 'Marco della Rovere',
    grades: 78
  },
  {
    id: 110 , 
    name: 'Paola Cortellessa',
    grades: 96
  },
  {
    id: 250 , 
    name: 'Andrea Mantegna',
    grades: 48
  },
  {
    id: 145 , 
    name: 'Gaia Borromini',
    grades: 74
  },
  {
    id: 196 , 
    name: 'Luigi Grimaldello',
    grades: 68
  },
  {
    id: 102 , 
    name: 'Piero della Francesca',
    grades: 50
  },
  {
    id: 120 , 
    name: 'Francesca da Polenta',
    grades: 84
  },
]
console.log(students)


//Creo un ciclo for per incremente gli studenti nell'array namesUpperCase, trasformandoli in uppercase
const namesUpperCase = []

for (let i = 0; 1 > students.length; i++) {
  const student = students[i];
  const nameUpperCase = student.name.toUpperCase();
  namesUpperCase.push(nameUpperCase);
}

//Upper 70
const studentsUpper70 = students.filter(student => student.total > 70);

//Upper 70 & Upper 120
const studentsUpper70id120 = students.filter(student => student.total > 70 && student.id > 120);






