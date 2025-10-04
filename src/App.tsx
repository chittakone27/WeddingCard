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
import WeddingGuestbook2 from "./WeddingGuestbook";
import Snowflakes from "./Snowflakes";
import Cover from "./cover";
import Profile from "./profile";
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
      top: "70px",
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
    <h1
      className="display-4 "
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
        margin: 0,
        fontFamily: "phetsarath ot"
      }}
    >
      {translations[language].invitationTitle}
    </h1>

    {/* Button directly under title */}
    <button
      onClick={scrollToLocation}
      className="btn btn-primary mt-4"
      style={{ zIndex: 20,        fontFamily: "phetsarath ot"
 }}
    >
      {translations[language].LocationButton}
    </button>
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
      <WeddingGuestbook2 />
    </div>
  );
}
