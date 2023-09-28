import "./App.css";
import { useState } from "react";
import products from "../products.json";
import { ProductCard } from "./components/ProductCard";
import { Button } from "./components/Button";
import { capitalizeString } from "./util/capitalize-string";

function App() {
  const [sortValue, setSortValue] = useState("name"); // Sortieren nach "price" or "name"
  const [filterValue, setFilterValue] = useState("all"); // All and other Categories

  const handleSortClick = (sort) => {
    setSortValue(sort);
  };

  const handleFilterClick = (product) => {
    setFilterValue(product);
  };

  const filterOptions = [
    { name: "all", displayName: "Alle" },
    { name: "Communication", displayName: "Kommunikationsgeräte" },
    { name: "Electronics", displayName: "Elektronischegeräte" },
    { name: "Home Appliances", displayName: "Haushaltsgeräte" },
    { name: "Computers", displayName: "Computers" },
    { name: "Kitchen", displayName: "Küche" },
    { name: "Home Security", displayName: "Alle" },
    { name: "Fitness", displayName: "Sport" },
    { name: "Photography", displayName: "Alle" },
  ];

  return (
    <div className="App">
      <h1>{capitalizeString("Products")}</h1>
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
      <br />
      {filterOptions.map((option, index) => (
        <Button
          key={index}
          active={filterValue === option.name}
          onClick={() => {
            handleFilterClick(option.name);
          }}
          text={option.displayName}
        />
      ))}
      {products
        .filter((product) => {
          if (filterValue === "all") {
            return true;
          } else {
            console.log(product.categories);
            console.log(filterValue);
            return product.categories.includes(filterValue);
          }
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
        .map((product, index) => (
          <ProductCard
            key={index}
            title={product.product_name}
            price={product.price}
            description={product.description}
            manufacturer={product.manufacturer}
          />
        ))}
    </div>
  );
}

export default App;
