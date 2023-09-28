import "./App.css";
import products from "../products.json";
import { ProductCard } from "./components/ProductCard";
import { Button } from "./components/Button";
import { useState } from "react";
import { capitalizeString } from "./util/capitalize-string";

function App() {
  const [sortValue, setSortValue] = useState("name"); //Sortieren nach "price" or "name"

  // const handleSortNameClick = () => {
  //   setSortValue("name");
  // };
  // const handleSortPriceClick = () => {
  //   setSortValue("price");
  // };

  const handleSortClick = (sort) => {
    setSortValue(sort);
  };

  const handleFilterClick = (product) => {
    return true;
  };

  console.log("App has been called by react");
  return (
    <div className="App">
      {/* capitalizeString for Testin purposes only!!!
      It's not needed for the actual functionality of the app
      */}
      <h1>{capitalizeString("test")}</h1>
      <Button
        active={sortValue === "name"}
        onClick={() => {
          handleSortClick("name");
        }}
        text="Sortieren nach Name"
      />
      <Button
        active={sortValue === "price"}
        onClick={() => {
          handleSortClick("price");
        }}
        text="Sortieren nach Preis"
      />
      {products
        .filter(handleFilterClick)
        .sort((productA, productB) => {
          if (sortValue === "price") {
            return productA.price - productB.price;
          } else {
            return productA.product_name.localeCompare(
              productB.product_name,
              "en"
            );
          }
        })
        .map((product) => {
          return (
            <ProductCard
              key={product.product_name}
              title={product.product_name}
              price={product.price}
              description={product.description}
              manufacturer={product.manufacturer}
            />
          );
        })}
    </div>
  );
}

export default App;
