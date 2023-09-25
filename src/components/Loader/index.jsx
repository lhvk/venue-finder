import { Loader as LoadingAnimation } from "react-loaders";

export function Loader({ message = undefined, size }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        margin: "20px",
      }}>
      <LoadingAnimation
        type="ball-grid-pulse"
        active
        color="#333"
        style={{ transform: `scale(${size})` || "scale(1.5)" }}
      />
      <span>Loading {message ?? ""}...</span>
    </div>
  );
}
