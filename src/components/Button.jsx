import "./Button.css";

export function Button({ onClick, text }) {
  return (
    <button className="my-button" onClick={onClick} type="button">
      {text}
    </button>
  );
}
