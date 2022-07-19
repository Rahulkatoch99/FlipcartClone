import React, { useEffect } from "react";
import { NavBar } from "./Home/NavBar.js";
import { Banner } from "./Home/Banner.js";
import { Fragment } from "react";
import { styled, Box } from "@mui/material";

import Slide from "./Home/Slide.js";
import MidSlide from "./Home/MidSlide";
import MidSection from "./Home/MidSection";

import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productActions";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

export const Home = () => {
  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <Fragment>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} />
        <MidSection />
        <Slide
          data={products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
      </Component>
    </Fragment>
  );
};
