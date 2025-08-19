import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function Carpark() {
  return (
    <div className="text-center mb-5" style={{ fontFamily: "boonhome" }}>
      <h1 className="mb-3 text-xl font-semibold text-gray-800">ສະຖານທີ່ຈັດງານ</h1>
      <p className="text-gray-600">
        Grand Ballroom, Luxury Hotel
        <br />
        123 Wedding St, Cityville, Country
      </p>

      <div className="ratio ratio-16x9 mx-auto mt-4 rounded-lg overflow-hidden">
        <iframe
src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4081.0271422367387!2d102.67095087517924!3d18.003568582992614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAwJzEyLjkiTiAxMDLCsDQwJzI0LjciRQ!5e1!3m2!1sen!2sla!4v1755617512137!5m2!1sen!2sla" 
          allowFullScreen
          loading="lazy"
          title="Carpark Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Minimal Button with Icon */}
      <div className="mt-5">
        <button
          onClick={() =>
            window.open(
              "https://maps.app.goo.gl/t64Q8nmEEZseRJAk8",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium transition mx-auto"
          style={{
            border: "1px solid rgba(0,204,204,1)",
            backgroundColor: "transparent",
            color: "rgba(0,204,204,1)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0,204,204,0.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <FmdGoodOutlinedIcon fontSize="small" />
          Open in Google Maps
        </button>
      </div>

     
    </div>
  );
}
