
export function addCourse(course) {
    const courses = getAllCourses();
    courses.push(course);
    localStorage.setItem("courses", courses);
}

export function getAllCourses() {
    return localStorage.getItem("courses") || courses;
}

const courses = [
    {
        number: 1,
        title: "Reactjs introduction",
        tutor: { 
            firstName: "Malek",
            lastName: "Boubakri"},
        formation: {
            number: 1,
            title: "MERN Stack",
        }
    },
    {
        number: 2,
        title: "React-router",
        tutor: { 
            firstName: "Malek",
            lastName: "Boubakri"},
        formation: {
            number: 1,
            title: "MERN Stack",
        }
    },
    {
        number: 3,
        title: "Redux",
        tutor: { 
            firstName: "Malek",
            lastName: "Boubakri"},
        formation: {
            number: 1,
            title: "MERN Stack",
        }
    }
] 