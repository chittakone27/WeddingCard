import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import ImageCarousel from './ImageCarousel';
import AgendaList from './AgendaList';
import SaveTheDate from './SaveTheDate';
import VideoMessage from './VideoMessage';
import LocationTabs from './Locationtabs';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import WeddingGuestbook from "./coments";
import Snowflakes from "./Snowflakes";
import Cover from "./cover";
// import './App.css';
import Profile from "./profile";
export default function WeddingCard() {
  const [showContent, setShowContent] = useState(false);
  const { language } = useLanguage();

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
  {/* Background video */}
  <Cover />

  {/* Snowflakes stay behind but above video */}
  <Snowflakes />

  {/* Foreground content */}
  <div className="container py-5 position-relative" style={{ zIndex: 10 }}>
    <LanguageSwitcher />
    <h1 className="display-4 mb-5">
      {translations[language].invitationTitle}
    </h1>
    {/* <ImageCarousel /> */}
  </div>
</div>

<div     className="position-relative"
>
      <Snowflakes />

  {/* Other sections */}
  <Profile />
  <SaveTheDate />
  <AgendaList />
  </div>

  <LocationTabs />
  <VideoMessage />
  <WeddingGuestbook />
</div>

  );
}
