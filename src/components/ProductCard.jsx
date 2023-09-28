export function ProductCard({ title, price, description, manufacturer }) {
  console.log("ProductCard has been called by react");
  return (
    <>
      <h2>{title} </h2>
      <p>{price}€</p>
      <p>{description}</p>
      <p>{manufacturer}</p>
    </>
  );
}
