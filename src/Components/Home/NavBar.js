import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../Constants/Data";

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weigth: 600;
  font-family: inherit;
`;
export const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => {
        return (
          <Container>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Text> {data.text}</Text>
          </Container>
        );
      })}
    </Component>
  );
};
