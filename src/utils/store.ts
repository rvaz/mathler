import type { Guess } from '@mathler/types/game';

const getStore = () => {
  const store = localStorage.getItem('store');
  return store ? { ...JSON.parse(store) } : undefined;
};

export const initStore = () => {
  localStorage.setItem('store', JSON.stringify({ solution: '10*2-6', guesses: [] }));
};

export const getSolution = () => {
  return getStore()?.solution || '';
};

export const getGuesses = () => {
  return getStore()?.guesses || [];
};

export const saveGuess = (newGuess: Guess) => {
  const store = getStore();
  localStorage.setItem(
    'store',
    JSON.stringify({ ...store, guesses: [...store.guesses, newGuess] }),
  );
};
