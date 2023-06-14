import { useState } from "react";
import "./App.css";

import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import FilterProduct from "./Components/FilterProduct/filterProduct";

let products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,Lorem ipsum Lorem ipsum ",
    isAvailable: true,
    image: "Images/freshMilk.jpg",
    price: 14,
    stock: 10,
  },

  {
    pID: 2,
    pName: "Cottage cheese",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,Lorem ipsum Lorem ipsum ",
    isAvailable: false,
    image: "Images/cottagecheese.jpg",
    price: 10,
    stock: 5,
  },

  {
    pID: 3,
    pName: "Broccoli",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,Lorem ipsum Lorem ipsum ",
    isAvailable: true,
    image: "Images/broccoli.jpg",
    price: 15,
    stock: 20,
  },

  {
    pID: 4,
    pName: "Oranges",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,Lorem ipsum Lorem ipsum",
    isAvailable: true,
    image: "Images/orange.jpg",
    price: 20,
    stock: 10,
  },

  {
    pID: 5,
    pName: "Olive-oil",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum,Lorem ipsum Lorem ipsum ",
    isAvailable: false,
    image: "Images/oliveoil.jpg",
    price: 14,
    stock: 15,
  },
];

function App() {
  let [newProductList, updateNewProductList] = useState(products);
  let [filterTextValue, updateFilterText] = useState("all");

  let filteredProductList = newProductList.filter((product) => {
    if (filterTextValue === "available") {
      return product.isAvailable === true;
    } else if (filterTextValue === "unavailable") {
      return product.isAvailable === false;
    } else {
      return product;
    }
  });

  function createProduct(product) {
    product.pID = newProductList.length + 1;
    updateNewProductList([product, ...newProductList]);
    // console.log(product);
  }

  function onFilterValueSelected(filtervalue) {
    updateFilterText(filtervalue);
  }

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <CreateProduct createProduct={createProduct} />
        <FilterProduct filterValueSelected={onFilterValueSelected} />
        <ProductList newProductList={filteredProductList} />
      </div>
    </div>
  );
}

export default App;
