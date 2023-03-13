export type CounterState = {
  value: number;
};

export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}
