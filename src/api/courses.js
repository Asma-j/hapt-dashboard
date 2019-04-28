const courses = [
  {
    number: 1,
    title: 'Reactjs introduction',
    tutor: {
      firstName: 'Malek',
      lastName: 'Boubakri'
    },
    formation: {
      number: 1,
      title: 'MERN Stack'
    }
  },
  {
    number: 2,
    title: 'React-router',
    tutor: {
      firstName: 'Malek',
      lastName: 'Boubakri'
    },
    formation: {
      number: 1,
      title: 'MERN Stack'
    }
  },
  {
    number: 3,
    title: 'Redux',
    tutor: {
      firstName: 'Malek',
      lastName: 'Boubakri'
    },
    formation: {
      number: 1,
      title: 'MERN Stack'
    }
  }
];

export function getAllCourses() {
  return localStorage.getItem('courses') || courses;
}

export function addCourse(course) {
  const oldCourses = getAllCourses();
  oldCourses.push(course);
  localStorage.setItem('courses', oldCourses);
}
