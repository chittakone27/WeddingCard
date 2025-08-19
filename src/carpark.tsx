import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function Carpark() {
  return (
    <div className="text-center mb-5" style={{ fontFamily: "boonhome" }}>
      <h1 className="mb-3 text-xl font-semibold text-gray-800">ບ່ອນຈອດລົດ</h1>
      <p className="text-gray-600">
        Grand Ballroom, Luxury Hotel
        <br />
        123 Wedding St, Cityville, Country
      </p>

      <div className="ratio ratio-16x9 mx-auto mt-4 rounded-lg overflow-hidden">
        <iframe
          src="https://maps.app.goo.gl/jARzuqZPJaJjqYz19"
          width="800"
          height="450"
          style={{ border: 0 }}
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
              "https://maps.app.goo.gl/jARzuqZPJaJjqYz19",
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
<p
  style={{
    marginTop: "4rem",
    fontSize: "0.95rem",
    color: "#6b7280",        // soft gray
    fontStyle: "italic",
    lineHeight: 1.6
  }}
>
  ຫຼັງຈາກບັນດາທ່ານຈອດລົດ ທີ່ບ່ອນຈອດລົດແລ້ວ

</p>
<p
  style={{
    marginTop: "1rem",
    fontSize: "0.95rem",
    color: "#6b7280",        // soft gray
    fontStyle: "italic",
    lineHeight: 1.6
  }}
>
 ພວກເຮົາທັງ 2 ໄດ້ກະກຽມລົດ KokKok
</p>
<p
  style={{
    marginTop: "1rem",
    fontSize: "0.95rem",
    color: "#6b7280",        // soft gray
    fontStyle: "italic",
    lineHeight: 1.6
  }}
>
ເພື່ອໃຫ້ບໍລິການນຳສົ່ງທຸກທ່ານເຂົ້າໜ້າງານ.
</p>
    </div>
  );
}
