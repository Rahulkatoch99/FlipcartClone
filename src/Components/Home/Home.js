import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Fragment } from "react";
import { styled, Box } from "@mui/material";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

export const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </Fragment>
  );
};
