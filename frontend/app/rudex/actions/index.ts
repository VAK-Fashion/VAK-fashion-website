export const token = (data: object) => {
  return {
    type: "token",
    data,
  };
};
export const user = (data: object) => {
  return {
    type: "user",
    data,
  };
};
