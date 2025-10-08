import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function Carpark() {
  return (
    <div className="text-center mb-5" style={{ fontFamily: "boonhome"
}}>
      <h1 className="mb-3 text-xl font-semibold text-gray-800">ສະຖານທີ່ຈັດງານ</h1>
      <p className="text-gray-600">
        Grand Ballroom, Luxury Hotel
        <br />
        123 Wedding St, Cityville, Country
      </p>
<div className="ratio ratio-16x9 mx-auto mt-4 rounded-lg overflow-hidden"   style={{ maxWidth: "85%"}}  // 👈 controls size
>
        <img src="./image/carpark.jpg" alt="carpark" className="w-full h-full object-cover"/>
      </div>

      {/* Minimal Button with Icon */}
          <div className="mt-5">
    <button
      onClick={() =>
        window.open(
          "https://maps.app.goo.gl/jARzuqZPJaJjqYz19",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium transition mx-auto button-heartbeat"
      style={{
        borderRadius: "20px 20px",
        border: "1px solid rgba(255,105,180,0.5)",
        backgroundColor: "rgba(232, 32, 132, 1)",
        color: "#f7f9fbff",
        fontWeight: "bold",
        fontFamily: "boonhome",
        width: "200px",
      }}
    >
      <FmdGoodOutlinedIcon fontSize="small" />
      Open in Google Maps
    </button>
      </div>

     
    </div>
  );
}
