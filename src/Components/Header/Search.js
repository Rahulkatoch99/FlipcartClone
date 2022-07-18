import { styled, Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(SearchIcon)`
  color: blue;
  padding: 5px;
`;

export const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for Products,Brands and more" />
      <Box>
        <SearchIconWrapper />
      </Box>
    </SearchContainer>
  );
};
