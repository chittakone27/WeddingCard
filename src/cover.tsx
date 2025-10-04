export default function Cover() {
  return (
    <img
      src="./image/cover.gif"
      alt="Wedding Cover"
      className="position-absolute"
      style={{
        objectFit: "cover",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // centers the GIF
        zIndex: -1, // keep it behind everything
        height: "100vh",
        minWidth: "400px",
        maxWidth: "800px",
      }}
    />
  );
}
