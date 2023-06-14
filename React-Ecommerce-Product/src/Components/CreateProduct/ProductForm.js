import React, { useState } from "react";

function ProductForm(props) {
  // Using multiple states for multiple values..

  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");
  let [pDescription, updateDescription] = useState("");
  let [pAvailable, updateAvailability] = useState(false);
  let [pImageUrl, updateImageUrl] = useState("");

  // Using single state to handle multiple value..

  // let [userInput,updateUserInput] = useState({
  //     pName: '',
  //     pPrice: '',
  //     pDescription: '',
  //     pAvailable: '',
  //     pImageUrl: ''
  // })

  function nameInputHandler(e) {
    // e.preventDefault();

    // for multiple states
    updateName(e.target.value);

    // for single state
    // updateUserInput({
    //     ...userInput,
    //     pName:e.target.value
    // })

    // Better method to use for single state...
    // updateUserInput((previous)=>{
    //     return{...previous,pName:e.target.value};
    // })
  }

  function priceInputHandler(e) {
    // e.preventDefault();

    // for multiple states
    updatePrice(e.target.value);

    // for single state
    // updateUserInput({
    //     ...userInput,
    //     pPrice:e.target.value
    // })
  }

  function descriptionInputHandler(e) {
    // e.preventDefault();

    // for multiple states
    updateDescription(e.target.value);

    // for single state
    // updateUserInput({
    //     ...userInput,
    //     pDescription:e.target.value
    // })
  }

  function availabilityInputHandler(e) {
    // e.preventDefault();

    // for multiple states
    updateAvailability(e.target.checked);

    // for single state
    // updateUserInput({
    //     ...userInput,
    //     pAvailable:e.target.value
    // })
  }

  function imageInputHandler(e) {
    // e.preventDefault();
    // for multiple state
    updateImageUrl(e.target.value);

    // for single state
    // updateUserInput({
    //     ...userInput,
    //     pImageUrl:e.target.value
    // })
  }

  function createProductEventHandler(event) {
    event.preventDefault();
    let product = {
      pName: pName,
      desc: pDescription,
      isAvailable: Boolean(pAvailable),
      image: pImageUrl,
      price: Number(pPrice),
    };

    updateName("");
    updatePrice("");
    updateDescription("");
    updateAvailability(false);
    updateImageUrl("");
    // console.log(product);
    props.createProduct(product);
    props.onCancel();
  }

  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={pName}
          placeholder="Product Name"
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          value={pPrice}
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={pDescription}
          placeholder="Product Description"
          onChange={descriptionInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pAvailable}
          onChange={availabilityInputHandler}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImageUrl}
          onChange={imageInputHandler}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={createProductEventHandler}
      >
        Add Product
      </button>
      <button type="button" className="btn btn-danger" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ProductForm;
