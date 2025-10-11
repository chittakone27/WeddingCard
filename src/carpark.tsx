import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default function Carpark() {
  return (
    <div
        // style={{ borderRadius: "1rem" }}
      style={{ fontFamily: "boonhome",borderRadius: "1rem",maxWidth: '100%', minWidth: '50px'}}
    >
      {/* Magic Handwriting H1 */}
      <h1 className="magic-title mb-3">
        ບ່ອນຈອດລົດ
      </h1>

  <p className="text-gray-600" style={{ fontFamily: "boonhome" ,textAlign: "center"}}>
        Ban Xamkhe,Xaysettha District, 
        <br />
 Vientiane Capital, Laos   </p>
      <div className="ratio ratio-16x9 mx-auto mt-4 rounded-lg overflow-hidden"   style={{ maxWidth: "85%"}}  // 👈 controls size
>
        <img src="./image/carpark.jpg" alt="carpark" className="w-full h-full object-cover"/>
      </div>

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
    zIndex: 20,
    color: "white",
    background: "linear-gradient(135deg, rgba(232, 32, 132, 1), rgba(255, 105, 180, 1))",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "30px",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0 4px 15px rgba(232, 32, 132, 0.4)",
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
