import {
  Button,
  Dialog,
  TextField,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { useState } from "react";
import { authenticateSignup } from "../../service/api.js";

const Component = styled(Box)`
  heigth: 70vh;
  width: 90vh;
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

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weigth: 600;
  cursor: pointer;
`;

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

const SignupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

export const LoginDilog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(SignupInitialValues);

  const handelClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
  };
  return (
    <Dialog
      open={open}
      onClose={handelClose}
      PaperProps={{ sx: { maxWidloginth: "unset" } }}
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
              <TextField variant="standard" label="Enter Email/Mobile Number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipcart's Term of use Privacy
                Policy
              </Text>
              <LoginButton>Login</LoginButton>
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
