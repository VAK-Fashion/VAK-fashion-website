export default (state: string = "", actions: any | object) => {
  switch (actions.type) {
    case "token":
      return actions.data;
    default:
      return state;
  }
};
