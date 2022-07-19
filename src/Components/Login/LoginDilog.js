import {
  Button,
  Dialog,
  TextField,
  Typography,
  DialogContent,
  Box,
  styled,
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.js";

const Component = styled(DialogContent)`
  heigth: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 29rem;
  width: 40%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48ps;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48ps;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weigth: 600;
  cursor: pointer;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const SignupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders,Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

export const LoginDilog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(SignupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const { setAccount } = useContext(DataContext);
  const [error, showError] = useState(false);

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) showError(true);
    else {
      showError(false);
      handelClose();
      setAccount(login.username);
    }
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handelClose();
    setAccount(signup.username);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handelClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  return (
    <Dialog
      open={open}
      onClose={handelClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", heigth: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading} </Typography>
            <Typography style={{ marginTop: 20 }}>
              {" "}
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                name="username"
                onChange={(e) => onValueChange(e)}
                label="Enter Email/Mobile Number"
              />
              {error && (
                <Error>Please enter valid Email ID/Mobile number</Error>
              )}
              <TextField
                variant="standard"
                name="password"
                onChange={(e) => onValueChange(e)}
                label="Enter Password"
              />
              <Text>
                By continuing, you agree to Flipcart's Term of use Privacy
                Policy
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignup}>
                New to Flipcart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Firstname"
                name="firstname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Lastname"
                name="lastname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Username"
                name="username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Email"
                name="email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Password"
                name="password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Phone"
                name="phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};
