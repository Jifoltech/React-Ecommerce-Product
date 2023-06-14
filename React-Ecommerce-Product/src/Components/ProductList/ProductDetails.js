import { useState } from "react";
import Button from "./Button";

let center = {
  display: "flex",
  alignItems: "center",
  marginLeft: "150px",
};

let style = {
  padding: "0px 20px",
  fontSize: 13,
};

function ProductDetails(props) {
  let [productCount, updateCount] = useState(0);

  function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "Zero";
  }

  let badgeClass = "badge  ";
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

  function decreamentButton() {
    // productCount--
    // console.log(productCount)
    updateCount(--productCount);
  }

  function increamentButton() {
    // productCount++
    // console.log(productCount)
    updateCount(++productCount);
  }

  return (
    <div className="d-flex align-item-centers justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: 20 }}>
        {props.price}
      </h6>
      <Button eventHandler={decreamentButton} disable={productCount === 0}>
        -
      </Button>
      <span style={style} className="d-flex align-items-center">
        {displayFormattedProductCount()}
      </span>
      <Button eventHandler={increamentButton}>+</Button>
      <span style={center} className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;
