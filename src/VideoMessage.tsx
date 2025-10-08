
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
        paddingTop: "115px",
      }}
    >
     {/* <div className="text-center"> */}
      <h2 className="mb-4">A Special Message from Us</h2>
      <div className="ratio ratio-16x9">
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
