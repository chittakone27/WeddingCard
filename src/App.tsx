import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Agenda2 from "./agenda2";
import SaveTheDate from "./SaveTheDate";
// import VideoMessage from "./VideoMessage";
import LocationTabs from "./Locationtabs";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import WeddingGuestbook from "./coments";
import Snowflakes from "./Snowflakes";
import Cover from "./cover";
import PaymentImage from "./payment2";
// import Profile from "./profile";
import WeddingAlbum from "./WeddingAlbum";
import GroomSection from "./groom";
import Bridesection from "./bride";
export default function WeddingCard() {
  const [showContent, setShowContent] = useState(false);
  const { language } = useLanguage();
  const locationRef = useRef<HTMLDivElement>(null);
  // const commentRef = useRef<HTMLDivElement>(null);

  const scrollToLocation = () => {
    locationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const scrollTocomment = () => {
  //   commentRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Loading animation first
  if (!showContent) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 flex-column bg-white">
        <img
          src={`${import.meta.env.BASE_URL}image/invitation.gif`}
          style={{ maxWidth: "250px", height: "180px" }}
          alt="Wedding Animation"
        />
      </div>
    );
  }

  return (
    <div style={{        fontFamily: "Open Sans, Noto Sans Lao",
}}>
      {/* === COVER SECTION === */}
      <div
        className="position-relative w-100 d-flex justify-content-center align-items-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <Cover />

        {/* Language switcher at top */}
<div
  className="position-absolute start-50 translate-middle-x d-flex flex-wrap justify-content-center"
  style={{
    top: "5%", // 👈 adjust this percentage to move it higher or lower
    zIndex: 20,
    
  }}
>
  <LanguageSwitcher />
</div>


        {/* Centered content */}
   {/* Centered Content */}
<div
  className="text-center text-dark position-relative d-flex flex-column justify-content-center align-items-center"
  style={{
    zIndex: 10,
    height: "100vh", // ensures full screen height
    padding: "0 1rem",
  }}
>
  {/* Cover gif */}
<img
  src="./image/cover.gif"
  alt="Wedding Cover"
  className="img-fluid d-block mx-auto mb-4"
  style={{
    width: "100%",
    maxWidth: "350px", // perfect size for both phone and desktop
    height: "auto",
    objectFit: "contain", // keeps full image visible without cropping
  }}
/>
        <p
      className="fw-bold mb-1"
      style={{
        color: "black",
        fontFamily: "Open Sans, Noto Sans Lao",
        fontSize: "16px",
        
      }}
    >
      {translations[language].invitationTitle}
    </p>

  {/* Button */}
<button
  onClick={scrollToLocation}
  className="btn fw-bold text-white"
  style={{
    background: "linear-gradient(135deg, rgba(232, 32, 132, 1), rgba(255, 105, 180, 1))",
    borderRadius: "30px",
    padding: "8px 24px",      // slightly smaller for mobile, still big enough for desktop
    fontSize: "1rem",          // readable on all devices
    minWidth: "180px",         // ensures button has consistent width
    maxWidth: "280px",         // prevents it from being too wide on large screens
    boxShadow: "0 4px 15px rgba(232, 32, 132, 0.4)",
    marginTop: "20px",
    whiteSpace: "normal",      // allows multi-line text if needed
    textAlign: "center",
        fontFamily: "Open Sans, Noto Sans Lao",
  }}
>
  {translations[language].LocationButton}
</button>
{/* <button
  onClick={scrollTocomment}
  className="btn fw-bold text-white"
  style={{
    background: "linear-gradient(135deg, rgba(232, 32, 132, 1), rgba(255, 105, 180, 1))",
    borderRadius: "30px",
    padding: "8px 24px",      // slightly smaller for mobile, still big enough for desktop
    fontSize: "1rem",          // readable on all devices
    minWidth: "180px",         // ensures button has consistent width
    maxWidth: "280px",         // prevents it from being too wide on large screens
    boxShadow: "0 4px 15px rgba(232, 32, 132, 0.4)",
    marginTop: "20px",
    whiteSpace: "normal",      // allows multi-line text if needed
    textAlign: "center",
        fontFamily: "Open Sans, phetsarath OT",
  }}
>
  {translations[language].CommentLocationButton}
</button> */}


  {/* Date & Address */}
  <div className="mt-4">

    <p
      className="fw-bold mb-1"
      style={{
        color: "black",
        fontFamily: "Open Sans, Noto Sans Lao",
        fontSize: "16px",
        
      }}
    >
      {translations[language].DateTime}
    </p>
    <p
      style={{
        color: "black",
        fontFamily: "Open Sans, Noto Sans Lao",
        fontSize: "14px",
      }}
    >
      {translations[language].Addrees}
    </p>
  </div>
</div>

      </div>

      {/* === PROFILE SECTION === */}
      {/* <Profile /> */}

      {/* === GROOM SECTION === */}
<GroomSection
  imageUrl="./image/groom.jpg"
  name={translations[language].wen}
  facebookUrl="https://www.facebook.com/chittakone.thammarongsad"
  instagramUrl="https://www.instagram.com/wen7.myrz?igsh=bXc5cjUxYmRnenZ0&utm_source=qr"
  language={language}
/>


{/* Heart GIF between groom and bride */}
<div className="d-flex justify-content-center my-4">
  <img
    src="./image/heart.gif"
    alt="Heart"
    style={{
      width: "80px",       // adjust size for all devices
      height: "80px",
      objectFit: "contain",
    }}
  />
</div>

<Bridesection
  imageUrl="./image/bride.jpg"
  name={translations[language].jaeng}
  facebookUrl="https://www.facebook.com/profile.php?id=100002477708470"
  instagramUrl="https://www.instagram.com/sitdavannnn?igsh=eHEzN3N6Y2s3YTA3&utm_source=qr"
  language={language} // <-- pass current language
/>



      {/* === SAVE THE DATE + SNOW === */}
      <div className="position-relative">
        <Snowflakes />
        <SaveTheDate   language={language} // <-- pass current language
 />
      </div>

      {/* === AGENDA === */}
      <Agenda2 language={language}/>

      {/* === LOCATION === */}
      <div ref={locationRef}>
        <LocationTabs language={language} />
      </div>
      <WeddingAlbum />

      {/* === VIDEO MESSAGE === */}

      {/* <VideoMessage /> */}
      <PaymentImage language={language} />

      {/* === GUESTBOOK === */}
            {/* <div ref={commentRef}> */}

      <WeddingGuestbook language={language} />
{/* </div> */}
      {/* === PHOTO ALBUM === */}
      <div className="text-center mt-4 mb-3" style={{ fontSize: "0.9rem", color: "#6c757d" }}>
  {translations[language].credits}
</div>
    </div>
  );
}
