export function Button({ type, onClick }) {
  return (
    <>
      <div>
        <Button type="button">Click Me</Button>
        <div>{type}</div>
        <div>{onClick}</div>
      </div>
    </>
  );
}
