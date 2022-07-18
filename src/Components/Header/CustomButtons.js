import { useState } from "react";

import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

import { LoginDilog } from "../Login/LoginDilog";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 14px;
    align-item: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weigth: 600;
  heigth: 32px;
`;

export const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDilog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
