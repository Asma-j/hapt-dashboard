import { trainers } from '../utils/fakeData';

export function getAllTrainers() {
  return localStorage.getItem('trainers') || trainers;
}

export function addTrainer(trainer) {
  const oldTrainers = getAllTrainers();
  oldTrainers.push(trainer);
  localStorage.setItem('trainers', oldTrainers);
}
