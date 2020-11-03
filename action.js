/* ASSIGNMENT
1. Creare un oggetto che rappresenta uno studente:
ogni studente è caratterizzato da un nome, un cognome e un'età.
Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
2. Creare un array di oggetti "studente".
Ciclare su tutti gli studenti
e stampare per ciascuno il nome e il cognome
3. Tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.
Creare con questi dati un nuovo oggetto
e inserirlo nell'array del punto precedente.
*/

$(document).ready(function () {

  // --------------------- PART 1 - STUDENT OBJECT ---------------------

  // Creating an object to define the student details
  var student = {
    'name' : 'Alice',
    'surname' : 'Rossi',
    'age' : 27,
  }
  console.log('The student object is: ' , student);
  console.log('');

  // Printing on screen the student details
  console.log('The student details are:');
  for (var key in student) {
    console.log(key + ': ' + student[key]);
  }
  console.log('');


  // ---------- PART 2 - STUDENTS CLASS (ARRAY OF OBJECTS) ----------

  // Creating an array of objects 'student'
  var poets_class = [
    {
      'name' : 'William',
      'surname' : 'Shakespeare',
      'age' : 30,
    },
    {
      'name' : 'Oscar',
      'surname' : 'Wilde',
      'age' : 32,
    },
    {
      'name' : 'William',
      'surname' : 'Blake',
      'age' : 28,
    },
    {
      'name' : 'Mary',
      'surname' : 'Shelley',
      'age' : 24,
    },
    {
      'name' : 'John',
      'surname' : 'Keats',
      'age' : 22,
    },
    {
      'name' : 'Virginia',
      'surname' : 'Woolf',
      'age' : 31,
    },
    {
      'name' : 'Emily',
      'surname' : 'Brontë',
      'age' : 26,
    },
  ];
  // FOR cycle to scan the entire array of students
  console.log('The class of poets (array of objects) is:');
  for (var i = 0; i < poets_class.length; i++) {
    console.log(poets_class[i]);
  }
  console.log('');

  // Printing in console only name and surname of each poet student
  console.log('*** POET STUDENTS DETAILS: NAMES & SURNAMES *** \n\n');
  // Scanning the whole students array
  for (var j = 0; j < poets_class.length; j++) {

    // ************* SOLUTION 1 - FOR-IN CYCLE *************
    // Scanning the objects (students details)
    for (let key in poets_class[j]) {
      // Checking if the key is 'age' to not print it on screen
      if (key !== 'age') {
        console.log(key + ': ' + poets_class[j][key]);
      }
    }

    /*
    // ************* SOLUTION 2 - ACCESSING THE KEY DIRECTLY *************
    var current_student = poets_class[j];
    // *** DOT NOTATION ***
    console.log(current_student.name + ' ' + current_student.surname);
    // *** SQUARE BRACKETS NOTATION ***
    // console.log(current_student['name'] + ' ' + current_student['surname']);
    */
    console.log('');
  }

  // ------------------------ OUTPUT IN THE DOM ------------------------

  // Scanning the whole students array
  for (j = 0; j < poets_class.length; j++) {
    $('#poets-class').append('<div class="clear-fix"><div class="box-left"></div><div class="box-right"></div></div>');
    // Scanning the objects (students details)
    for (let key in poets_class[j]) {
      // Checking if the key is 'age' to print a <small>
      if (key === 'age') {
        $('#poets-class').append('<div><small>' + key + ': '+ poets_class[j][key] + '</small></div> ');
      } else {
        $('#poets-class').append('<div><span>' + key + '</span>: ' + '<span>' +  poets_class[j][key] + '</span></div> ');
      }
    }
  }


  // ---------- PART 3 - NEW STUDENT (to be added to the poets class) ----------

  // Entering inputs from the user: new student details
  console.log('***** NEW STUDENT DETAILS ***** \n\n');

  // *** SOLUTION 1 - ACCESSING & CREATING THE KEY AND ITS VALUES SIMULTANEOUSLY ***
  var new_student = {};
  // Invoking functions directly (without using variables)
  new_student.nome = enterName();
  new_student.surname = enterSurname();
  new_student.age = enterAge();

  /*
  // *** SOLUTION 2 - CREATING THE OBJECT using variables***
  // Initialization of variables
  var new_student_name = enterName();
  var new_student_surname = enterSurname();
  var new_student_age = enterAge();
  // Creating a new object with the new student details
  var new_student = {
    'name' : new_student_name,
    'surname' : new_student_surname,
    'age' : new_student_age,
  }
  // Output in console
  console.log('Name: ' + new_student_name);
  console.log('Surname: ' + new_student_surname);
  console.log('Age: ' + new_student_age);
  */

  console.log('The new student details are: ' , new_student, '\n\n');

  // Adding the new student details to the poets class array
  poets_class.push(new_student);
  console.log('The new poets class updated with the new student details is:');
  console.log(poets_class);


  // ------------- NEW STUDENT DETAILS - OUTPUT IN THE DOM -------------

  var new_student_index = poets_class.length - 1;
  // Scanning the whole students array
  for (j = 0; j < poets_class.length; j++) {
    if (j === new_student_index) {
      $('#new-student').append('<h3>New Student</h3>')
      // Scanning the object (new students details)
      for (key_poet in poets_class[j]) {
        // Checking if the key is 'age' to print a <small>
        if (key_poet === 'age') {
          $('#new-student').append('<div><small>' + key_poet + ': '+ poets_class[j][key_poet] + '</small></div> ');
        } else {
          $('#new-student').append('<div><span>' + key_poet + '</span>: ' + '<span>' +  poets_class[j][key_poet] + '</span></div> ');
        }
      }
    }
  }
});

// --------------------------- FUNCTIONS ---------------------------

// Entering the name
function enterName() {
  const min_length = 3;
  const max_length = 20;
  let student_name = prompt('Please enter the name of the new student.');
  // Checking name min-max length
  while (student_name < min_length || student_name > max_length) {
    student_name = prompt('ERROR. The name you entered is not valid. Please enter the name of the new student. It must be longer than ' + min_length + ' and shorter than ' + max_length + ' characters.');
  }
  return student_name;
}

// Entering the surname
function enterSurname() {
  const min_length = 3;
  const max_length = 20;
  let student_surname = prompt('Now enter his/her surname.');
  // Checking surname min-max length
  while (student_surname < min_length || student_surname > max_length) {
    student_surname = prompt('ERROR. The surname you entered is not valid. Please enter the surname of the new student. It must be longer than ' + min_length + ' and shorter than ' + max_length + ' characters.');
  }
  return student_surname;
}

// Entering the age
function enterAge() {
  const min_age = 6;
  const max_age = 100;
  let student_age = parseInt(prompt('Finally enter his/her current age.'));
  // Checking that age is a valid number
  while(isNaN(student_age) || student_age < min_age || student_age > max_age) {
    student_age = parseInt(prompt('ERROR. The value you entered is not a valid number. Please enter the current age of the new student. He/she cannot be younger than ' + min_age + ' and older than ' + max_age + ' years old.'));
  }
  return student_age;
}
