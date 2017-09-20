export const store = (state: any = {}, { type, payload }) => {
  switch (type) {
    case 'SET_KEY':
      state.key = payload;
      return state;
    case 'SET_TOKEN':
      state.token = payload;
      return state;
    case 'SET_STARED_BOARD_NAME':
      state.board_name = payload;
      return state;
    case 'SET_LIST_NAME':
      state.list_name = payload;
      return state;
    default:
      return state;
  }
};
