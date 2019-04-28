import { students } from '../utils/fakeData';

export function getAllStudents() {
  return localStorage.getItem('students') || students;
}

export function addStudent(student) {
  const oldStudents = getAllStudents();
  oldStudents.push(student);
  localStorage.setItem('students', oldStudents);
}
