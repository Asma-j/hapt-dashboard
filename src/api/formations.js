import { formations } from '../utils/fakeData';

export function getAllFormations() {
  return localStorage.getItem('formations') || formations;
}

export function addformation(formation) {
  const oldformations = getAllFormations();
  oldformations.push(formation);
  localStorage.setItem('formations', oldformations);
}
