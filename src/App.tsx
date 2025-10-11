import { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Agenda2 from "./agenda2";
import SaveTheDate from './SaveTheDate';
import VideoMessage from './VideoMessage';
import LocationTabs from './Locationtabs';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import WeddingGuestbook from "./coments";
import Snowflakes from "./Snowflakes";
import Cover from "./cover";
import Profile from "./profile";
import WeddingAlbum from "./WeddingAlbum";

export default function WeddingCard() {
  const [showContent, setShowContent] = useState(false);
  const { language } = useLanguage();

  // Type the ref correctly
  const locationRef = useRef<HTMLDivElement>(null);

  const scrollToLocation = () => {
    // Use optional chaining to avoid errors
    locationRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 flex-column bg-white">
        <img
          src={`${import.meta.env.BASE_URL}image/invitation.gif`}
          style={{ maxWidth: "300px", height: "200px" }}
          alt="Wedding Animation"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="position-relative" style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
        <Cover />
<div
  className="position-relative d-flex justify-content-center align-items-center text-center"
  style={{ zIndex: 10, height: "100vh", color: "white" }}
>
  <div
    style={{
      position: "absolute",
      top: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      flexWrap: "wrap",
      zIndex: 20,
    }}
  >
    <LanguageSwitcher />
  </div>

  {/* Centered title */}
  <div style={{transform: "translateY(20%)"}}> 
        <img
      src="./image/cover.gif"
      alt="Wedding Cover"
      className="position-absolute"
      style={{
        top: "27%",
        left: "50%",
        transform: "translate(-50%, -50%)", // centers the GIF
        zIndex: -1, // keep it behind everything
        minWidth: "200px",
        maxWidth: "400px",
      }}
    />
    {/* <h1
      className="display-4 "
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
        margin: 0,
        // fontFamily: "phetsarath ot"
      }}
    >
      {translations[language].invitationTitle}
    </h1> */}

    {/* Button directly under title */}
<button
  onClick={scrollToLocation}
  // className="mt-1 mb-2"
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
    marginTop:"230px"
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(232, 32, 132, 0.6)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 15px rgba(232, 32, 132, 0.4)";
  }}
>
  {translations[language].LocationButton}
</button>
<div style={{marginTop:"42%"}}>
<p  style={{ display: "flex",  alignItems: "center",
      justifyContent: "center", color:"black",fontFamily:"open sans", fontSize:"16px", fontWeight:"bold"
}}
>{translations[language].DateTime}</p>
<p  style={{ display: "flex",  alignItems: "center",
      justifyContent: "center", color:"black",fontFamily:"open sans", fontSize:"16px",
}}
>{translations[language].Addrees}</p>
</div>

  </div>
  
</div>

          
      </div>

      <Profile />
      <div className="position-relative">
        <Snowflakes />
        <SaveTheDate />
      </div>

      <Agenda2 />

      {/* Attach ref to LocationTabs */}
      <div ref={locationRef}>
        <LocationTabs />
      </div>

      <VideoMessage />
      <WeddingGuestbook />
      <WeddingAlbum />
    </div>
  );
}
