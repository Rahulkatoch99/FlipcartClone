import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import { Search } from "./Search";
import { CustomButtons } from "./CustomButtons";
// import Profile from "./Profile.js";

const StyledHeader = styled(AppBar)`
  heigth: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  marginLeft: 4,
  height: 10,
});

const CustonButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;

export const Header = () => {
  const LogoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={LogoUrl} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="spam" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-url" />
          </Box>
        </Component>
        <Search />
        <CustonButtonWrapper>
          <CustomButtons />
        </CustonButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
