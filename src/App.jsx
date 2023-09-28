import "./App.css";
import products from "../products.json";
import { ProductCard } from "./components/ProductCard";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [sortValue, setSortValue] = useState("name"); //Sortieren nach "price" or "name"

  const handleSortNameClick = () => {
    setSortValue("name");
  };
  const handleSortPriceClick = () => {
    setSortValue("price");
  };
  // function handleSortNameClick(){
  //   setSortValue("price");
  // }
  console.log("App has been called by react");
  return (
    <div className="App">
      <h1>Produkte</h1>
      <Button
        onClick={() => {
          console.log("Button1 has been clicked");
        }}
        text="Sortieren nach Name"
      />
      <Button
        onClick={() => {
          console.log("Button2 has been clicked");
        }}
        text="Sortieren nach Preis"
      />
      {products
        .filter((product) => {
          return true;
        })
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
