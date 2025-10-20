export default function VideoMessage() {
  return (
    <div
      style={{
        backgroundImage: 'url("./image/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "#000",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        A Special Message from Us
      </h2>

      {/* Video Container */}
      <div
        className="ratio ratio-16x9"
        style={{
          maxWidth: "85%",
          minWidth: "250px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/ScMzIvxBSi4"
          title="Welcome Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
