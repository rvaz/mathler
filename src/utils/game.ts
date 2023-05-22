import type { Guess } from '@mathler/types/game';

import { OPERATORS, NO_START_OPERATORS } from '@utils/regexes';

/**
 * validateGuess
 * Check game guess against game answer
 *
 * @param {String} guess User input as game guess
 * @param {String} answer Daily calculation answer to be guessed
 * @returns {Boolean | String} True if guess matches answer, String with error if guess is wrong
 */
export const validateGuess = (guess: string, answer: string) => {
  try {
    if (guess.length < 6) return 'Your guess is too short.';
    if (NO_START_OPERATORS.test(guess[0])) return 'Cannot start with that operator.';
    if (OPERATORS.test(guess[guess.length - 1])) return 'Cannot end with an operator.';
    return eval(guess) === answer ? true : `Guess is not equal to ${answer}`;
  } catch (err) {
    return 'Guess calculation has an error.';
  }
};

/**
 * checkAnswer
 * Check each individual char against solution and highlight it with a status of how close it is
 *
 * @param {Guess} guess User input as game guess with game format
 * @param {String} solution Daily calculation to be guessed
 * @returns {Guess} User guess with highlight status on each char
 */
export const checkAnswer = (guess: Guess, solution: string) => {
  const statusGuess = Array(6);
  const sol = solution.split('');

  // check for same position match, if found remove it from sol and mark with 'correct'
  guess.forEach((entry, idx) => {
    if (entry.label === sol[idx]) {
      statusGuess[idx] = 'correct';
      sol[idx] = '';
    }
  });
  // check remaining chars for presence in any position, if found remove them from sol and mark with 'almost'
  guess.forEach((entry, idx) => {
    const solIdx = sol.findIndex((char) => char === entry.label);
    if (solIdx > -1 && !statusGuess[idx]) {
      statusGuess[idx] = 'almost';
      sol[solIdx] = '';
    }
  });
  guess.forEach((entry, idx) => {
    if (!statusGuess[idx]) statusGuess[idx] = 'wrong';
  });

  return guess.map((g, idx) => ({ ...g, status: statusGuess[idx] }));
};
