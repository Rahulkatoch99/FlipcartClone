import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${URL}/login`, user);
  } catch (error) {
    console.log("error while calling login API: ", error);
  }
};

export const authenticateSignup = async (User) => {
  try {
    return await axios.post(`${URL}/signup`, User);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};

// var data = JSON.stringify({
//   firstname: "rahul",
//   lastname: "katoch",
//   username: "ghjkssd",
//   email: "kajghja@gmail.com",
//   password: "gjhn",
//   phone: "9910935066",
// });

// var config = {
//   method: "post",
//   url: "http://localhost:8000/signup",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   data: data,
// };

// export const authenticateSignup = axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
