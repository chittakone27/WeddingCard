
export default function VideoMessage() {
  return (
     <div
      className="container my-5 text-center"
      style={{
        backgroundImage: 'url("./image/background.png")', // 👈 add your image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        borderRadius: '10px',
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
