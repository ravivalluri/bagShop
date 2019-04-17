import React from "react";
import ProductsList from "./Products/ProductsList";
import Title from "./Title";
import Category from "./Category";
import {
  connect
} from "react-redux";

const Home = props => {
  return ( <
    React.Fragment >
    <
    div className = "overlay"
    style = {
      props.modal === true ? over : null
    }
    /> <
    div className = "container py-3" >
    <
    Title title = "BagShack" / >
    <
    Category / >
    <
    ProductsList products = {
      props.products
    }
    /> <
    /div> <
    /React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    products: state.shop.selectedProducts,
    modal: state.shop.modalOpen
  };
};

export default connect(mapStateToProps)(Home);

const over = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyontent: "center",
  background: "rgba(0, 0, 0, 0.8)",
  zIndex: "1"
};