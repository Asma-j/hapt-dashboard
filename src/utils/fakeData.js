export const courses = [
  {
    number: 1,
    title: 'Reactjs introduction',
    tutor: {
      number: 1,
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
      number: 2,
      firstName: 'Zaki',
      lastName: 'Meddeb'
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
      number: 1,
      firstName: 'Malek',
      lastName: 'Boubakri'
    },
    formation: {
      number: 1,
      title: 'MERN Stack'
    }
  },
  {
    number: 4,
    title: 'Angular introduction',
    tutor: {
      number: 2,
      firstName: 'Zaki',
      lastName: 'Meddeb'
    },
    formation: {
      number: 2,
      title: 'MEAN Stack'
    }
  },
];

export const formations = [
  {
    number: 1,
    title: 'MERN Stack',
    tutor: {
      number: 1,
      firstName: 'Malek',
      lastName: 'Boubakri'
    },
    course: [
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
  },
  {
    number: 2,
    title: 'MEAN Stack',
    tutor: {
      number: 2,
      firstName: 'Zaki',
      lastName: 'Meddeb'
    }
  }
];

export const students = [
  {
    number: 1,
    firstName: 'Foulan',
    lastName: 'Foulani',
    email: 'faltan@gmail.com'
  },
  {
    number: 2,
    firstName: 'Nour',
    lastName: 'Boubakri',
    email: 'emai1@gmail.com'
  },
  {
    number: 3,
    firstName: 'Med Ali',
    lastName: 'Ezzedine',
    email: 'xdaly@gmail.com'
  },
  {
    number: 4,
    firstName: 'Hamdi',
    lastName: 'Sioud',
    email: 'hamdi@gmail.com'
  }
];

export const trainers = [
  {
    number: 1,
    firstName: 'Malek',
    lastName: 'Boubakri',
    email: 'malekbouba@gmail.com'
  },
  {
    number: 2,
    firstName: 'Zaki',
    lastName: 'Meddeb',
    email: 'zakimdb@gmail.com'
  }
];
