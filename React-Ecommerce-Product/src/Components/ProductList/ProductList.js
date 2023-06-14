// import { useState } from "react";
import Products from "./Products";

function ProductList(props) {
  //   console.log(props.newProduct);
  return props.newProductList.length === 0 ? (
    "<h3>No Product is Available</h3>"
  ) : (
    <ul className="list-group shadow">
      {props.newProductList.map((product) => {
        return (
          <Products
            key={product?.pID}
            ID={product?.pID}
            name={product?.pName}
            description={product?.desc}
            isAvailable={product?.isAvailable}
            imageUrl={product?.image}
            price={product?.price}
            // stock={product?.stock}
          ></Products>
        );
      })}
    </ul>
  );
}

export default ProductList;
