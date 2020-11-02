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
  console.log('*** POET STUDENTS DETAILS: NAMES & SURNAMES ***');
  console.log('');
  // Scanning the whole students array
  for (var j = 0; j < poets_class.length; j++) {

    // ************* SOLUTION 1 - FOR-IN CYCLE *************
    // Scanning the objects (students details)
    for (var key_poet in poets_class[j]) {
      // Checking if the key is 'age' to not print it on screen
      if (key_poet !== 'age') {
        console.log(key_poet + ': ' + poets_class[j][key_poet]);
      }
    }

    /*
    // ************* SOLUTION 2 - ACCESSING THE KEY DIRECTLY *************
    var current_student = poets_class[j];
    console.log(current_student.name + ' ' + current_student.surname);
    // console.log(current_student['name'] + ' ' + current_student['surname']);
    */
    console.log('');
  }

  // ------------------------ OUTPUT IN THE DOM ------------------------

  // Scanning the whole students array
  for (j = 0; j < poets_class.length; j++) {
    $('#poets-class').append('<div class="clear-fix"><div class="box-left"></div><div class="box-right"></div></div>');
    // Scanning the objects (students details)
    for (key_poet in poets_class[j]) {
      // Checking if the key is 'age' to print a <small>
      if (key_poet === 'age') {
        $('#poets-class').append('<div><small>' + key_poet + ': '+ poets_class[j][key_poet] + '</small></div> ');
      } else {
        $('#poets-class').append('<div><span>' + key_poet + '</span>: ' + '<span>' +  poets_class[j][key_poet] + '</span></div> ');
      }
    }
  }


  // ---------- PART 3 - NEW STUDENT (to be added to the class) ----------

  // Entering inputs from the user: new student details
  console.log('***** NEW STUDENT DETAILS *****');
  var new_student_name = prompt('Please enter the name of the new student.');
  var new_student_surname = prompt('Now enter his/her surname.');
  var new_student_age = parseInt(prompt('Finally enter his/her current age.'));
  // Check that age is a number
  while(isNaN(new_student_age)) {
    new_student_age = parseInt(prompt('ERROR. The value you entered is not a number. Please enter the current age of the new student.'));
  }
  // Output in console
  console.log('Name: ' + new_student_name);
  console.log('Surname: ' + new_student_surname);
  console.log('Age: ' + new_student_age);

  // Creating a new object with the new student details
  var new_student = {
    'name' : new_student_name,
    'surname' : new_student_surname,
    'age' : new_student_age,
  }
  console.log('The new student details are: ' , new_student);
  console.log('');

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
