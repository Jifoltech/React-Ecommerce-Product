import { useState } from "react";
import ProductForm from "./ProductForm";

// Parent component
function CreateProduct(props) {
  const [showForm, updateShowForm] = useState(false);
  function onCreateProduct(product) {
    // console.log(product)
    props.createProduct(product);
  }

  function onCreateNewProduct() {
    updateShowForm(true);
  }

  function onProductSubmittedCancel() {
    updateShowForm(false);
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px 20px",
        borderRadius: 2,
      }}
    >
      {!showForm && (
        <button className="btn btn-success" onClick={onCreateNewProduct}>
          Create Product
        </button>
      )}
      {showForm && (
        <ProductForm
          createProduct={onCreateProduct}
          onCancel={onProductSubmittedCancel}
        ></ProductForm>
      )}
    </div>
  );
}

export default CreateProduct;
