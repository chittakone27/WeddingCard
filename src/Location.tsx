import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function Location() {
  return (
    <div className="text-center mb-5" style={{ fontFamily: "boonhome", padding: "1rem" }}>
      
      {/* Heading */}
      <h1
className="magic-title mb-3"        style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "600" }}
      >
        ສະຖານທີ່ຈັດງານ
      </h1>

      {/* Address */}
      <p
        className="text-gray-600"
        style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", lineHeight: 1.5 }}
      >
        Grand Ballroom, Luxury Hotel
        <br />
        123 Wedding St, Cityville, Country
      </p>

      {/* Image */}
      <div
        className="ratio ratio-16x9 mx-auto mt-4 rounded-lg overflow-hidden"
        style={{ maxWidth: "85%", minWidth: "200px" }}
      >
        <img
          src="./image/carpark.jpg"
          alt="carpark"
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Button with Icon */}
      <div className="mt-5">
  <button
  onClick={() =>
    window.open(
      "https://maps.app.goo.gl/jARzuqZPJaJjqYz19",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="d-flex align-items-center justify-content-center gap-2 mx-auto"
  style={{
    borderRadius: "30px",
    border: "1px solid rgba(255,105,180,0.5)",
    background: "linear-gradient(135deg, #e82084, #8e44ad)", // updated gradient
    color: "#f7f9fb",
    fontWeight: "bold",
    fontFamily: "boonhome",
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    padding: "0.5rem 1.5rem",
    minWidth: "180px",
    maxWidth: "250px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  }}
>
  <FmdGoodOutlinedIcon fontSize="small" />
  Open in Google Maps
</button>

      </div>
    </div>
  );
}
