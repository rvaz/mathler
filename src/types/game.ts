import type { CardStatus } from '@mathler/components/card';

export type GuessEntry = {
  id: string;
  label: string;
  status: CardStatus;
};

export type Guess = GuessEntry[];
