export default (state: object = {}, action: any) => {
  switch (action.type) {
    case "user":
      return action.data;
    default:
      return state;
  }
};
