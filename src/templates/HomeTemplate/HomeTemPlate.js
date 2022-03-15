import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

export const HomeTemPlate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />

            <Component {...propsRoute} />
            <br />
            <hr />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
