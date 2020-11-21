import { SEND_MESSAGE } from "../actionTypes";
const inState = {
  room: 1,
  users: [],
  messages: [],
};

export function chatReducer(state = inState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
}
