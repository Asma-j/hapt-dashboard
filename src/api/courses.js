import { courses } from '../utils/fakeData';

export function getAllCourses() {
  return localStorage.getItem('courses') || courses;
}

export function addCourse(course) {
  const oldCourses = getAllCourses();
  oldCourses.push(course);
  localStorage.setItem('courses', oldCourses);
}
