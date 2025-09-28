import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ImageCarousel from './ImageCarousel';
import AgendaList from './AgendaList';
import SaveTheDate from './SaveTheDate';
import VideoMessage from './VideoMessage';
import LocationTabs from './Locationtabs';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import WeddingGuestbook from "./coments";
import Snowflakes from "./Snowflakes";
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
    <div className="py-5 position-relative">
    {/* <div> */}
      {/* Snowflakes stay behind */}
      <Snowflakes />

      {/* ❄ Freeze content on top */}
      <div className="position-relative" style={{ zIndex: 10 }}>
        <LanguageSwitcher />
        <h1 className="display-4 mb-5">
          {translations[language].invitationTitle}
        </h1>
            </div>

        <ImageCarousel />
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
