const formations = [
  {
    number: 1,
    title: 'MERN Stack',
    tutor: {
      firstName: 'Malek',
      lastName: 'Boubakri'
    },
    cours: [
      {
        number: 1,
        title: 'Reactjs introduction'
      },
      {
        number: 2,
        title: 'React-router'
      },
      {
        number: 3,
        title: 'Redux'
      }
    ]
  }
];

export function getAllformations() {
  return localStorage.getItem('formations') || formations;
}

export function addCourse(formation) {
  const oldformations = getAllformations();
  oldformations.push(formation);
  localStorage.setItem('formations', oldformations);
}
