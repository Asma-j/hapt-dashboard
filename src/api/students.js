const students = [
  {
    number: 1,
    student: {
      firstName: 'Malek',
      lastName: 'Boubakri'
    },

    email: 'emai1@gmail.com'
  },
  {
    number: 2,
    student: {
      firstName: 'Malek',
      lastName: 'Boubakri'
    },

    email: 'emai1@gmail.com'
  },
  {
    number: 3,
    student: {
      firstName: 'Malek',
      lastName: 'Boubakri'
    },

    email: 'emai1@gmail.com'
  },

  {
    number: 3,
    student: {
      firstName: 'Malek',
      lastName: 'Boubakri'
    },

    email: 'emai13@gmail.com'
  }
];

export function getAllStudents() {
  return localStorage.getItem('students') || students;
}

export function addStudent(student) {
  const oldStudents = getAllStudents();
  oldStudents.push(student);
  localStorage.setItem('students', oldStudents);
}
