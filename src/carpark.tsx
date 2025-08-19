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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086909157573!2d-122.41941528468242!3d37.774929779758834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e18f9dbb%3A0x9e6ee49f6cc840a2!2sLuxury%20Hotel!5e0!3m2!1sen!2sus!4v1620319457203!5m2!1sen!2sus"
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
              "https://maps.google.com/?q=Luxury+Hotel+123+Wedding+St,+Cityville,+Country",
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
