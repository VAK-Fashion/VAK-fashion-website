import axios from "axios";
const url = "http://localhost:8000/";
export const Login = async (data: object) => {
  return await (
    await axios.post(`${url}user/login/`, data)
  ).data;
};
export const sign = async (data: object) => {
  return await (
    await axios.post(`${url}user/sin-up/`, data)
  ).data;
};
export const userInfo = async (token: string) => {
  return axios
    .post(`${url}user/user/`, undefined, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((r) => r.data.ok);
};
