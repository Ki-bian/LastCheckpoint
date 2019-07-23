
const initialState = {
  numberTicket: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_BOTTOM_NAV':
      return {
        ...state,
        bottomNav: action.payload,
      };
    case 'HANDLE_REMOVE':
      return {
        ...state,
        remove: action.payload,
        numberTicket: state.numberTicket - 1,
      };
    case 'HANDLE_ADD':
      return {
        ...state,
        remove: action.payload,
        numberTicket: state.numberTicket + 1,
      };
    default:
      return state;
  }
};

export default reducers;
