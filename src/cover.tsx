export default function Cover() {
  return (
 <video
  autoPlay
  loop
  muted
  playsInline
  className="position-absolute"
  style={{
    objectFit: "cover",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // centers the video
    zIndex: -1, // keep it behind everything
    height: "100vh",
    minWidth: "400px",
    maxWidth: "800px",
  }}
>
  <source src="./image/cover.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

  );
}
