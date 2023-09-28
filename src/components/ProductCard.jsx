import "./ProductCard.css";

export function ProductCard({ title, price, description, manufacturer }) {
  console.log("ProductCard has been called by react");
  return (
    <div
      // style={{
      //   backgroundColor: price > 200 ? "red" : undefined,
      // }}
      className="product-card"
    >
      <h2>{title} </h2>
      <p>{price}€</p>
      <p>{description}</p>
      <p>{manufacturer}</p>
    </div>
  );
}
