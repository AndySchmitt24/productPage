import "./Button.css";

export function Button({ onClick, text, active }) {
  return (
    <button
      className="my-button"
      style={{
        backgroundColor: active ? "red" : undefined,
      }}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}
