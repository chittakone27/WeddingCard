import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ImageCarousel from './ImageCarousel';
import AgendaList from './AgendaList';
import SaveTheDate from './SaveTheDate';
import VideoMessage from './VideoMessage';
import LocationTabs from './Locationtabs';
import LanguageSwitcher from './LanguageSwitcher'; // ✅ add switcher
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations"; // ✅ translation strings

export default function WeddingCard() {
  const [showContent, setShowContent] = useState(false);
  const { language } = useLanguage(); // ✅ get current language

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 flex-column bg-white">
        <img
          src="/image/invitation.gif"
          style={{ maxWidth: "300px", height: "auto" }}
          alt="Wedding Animation"
        />
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* ✅ language switcher on top */}
      <LanguageSwitcher />

      <h1 className="text-center display-4 mb-5">
        {translations[language].invitationTitle}
      </h1>

      <ImageCarousel />
      <SaveTheDate />
      <AgendaList />
      <LocationTabs />
      <VideoMessage />
    </div>
  );
}
