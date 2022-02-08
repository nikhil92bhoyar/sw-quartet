import cards from './cards';
import Person from "../../comparable/Person";

export interface State {
  cards: Person[];
}

export default function(state: State = { cards: cards }, action: any): State {
  switch (action.type) {
    default:
      return state;
  }
}
