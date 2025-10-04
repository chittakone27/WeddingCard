import { useRef, useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default function Profile() {
  const groomRef = useRef(null);
  const brideRef = useRef(null);
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };

    const groomObserver = new IntersectionObserver(([entry]) => {
      setGroomVisible(entry.isIntersecting);
    }, observerOptions);

    const brideObserver = new IntersectionObserver(([entry]) => {
      setBrideVisible(entry.isIntersecting);
    }, observerOptions);

    if (groomRef.current) groomObserver.observe(groomRef.current);
    if (brideRef.current) brideObserver.observe(brideRef.current);

    return () => {
      groomObserver.disconnect();
      brideObserver.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url("./image/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        // paddingTop: "150px",
      }}
    >
      {/* Profiles and Heart */}
      <div   style={{ position: "relative", top: "70px" }}
 className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3" >

        {/* Groom */}
        <div
          ref={groomRef}
          className={`profile-card ${groomVisible ? "spin-in" : "spin-hidden"}`}
          style={{
            // backgroundColor: 'rgba(48, 48, 48, 1)',
            // padding: '20px',
            // borderRadius: '10px',
            // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            // flex: 1,
            // minWidth: '367px',
            // maxWidth: '1000px',
            textAlign: 'center',
          }}
        >
          <h3 className="mb-3" style={{color:"black"}}>Groom</h3>
          <div className="profile-image mx-auto mb-2">
            <img src="./image/groom.jpg" alt="Groom" />
          </div>
          <h6 style={{color:"black"}}>CHITTAKONE THAMMARONGSAD</h6>
          <div className="d-flex justify-content-center gap-3">
                   <a
  href="https://facebook.com/yourbrideprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon facebook"
>
  <FacebookIcon fontSize="small" />
</a>

<a
  href="https://instagram.com/yourbrideprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon instagram"
>
  <InstagramIcon fontSize="small" />
</a>
          </div>
        </div>

        {/* Heart */}
        <div className="text-center">
          <img
            src="./image/heart.gif"
            alt="Heart"
            style={{ width: "60px", height: "60px" }}
            className="heart-icon"
          />
        </div>

        {/* Bride */}
        <div
          ref={brideRef}
          className={`profile-card ${brideVisible ? "spin-in" : "spin-hidden"}`}
          style={{
            // backgroundColor: 'rgba(48, 48, 48, 1)',
            // padding: '20px',
            // borderRadius: '10px',
            // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            // flex: 1,
            // minWidth: '367px',
            // maxWidth: '1000px',
            textAlign: 'center',
          }}
        >
          <h3 className="mb-3" style={{color:"black"}}>Bride</h3>
          <div className="profile-image mx-auto mb-2">
            <img src="./image/bride.jpg" alt="Bride" />
          </div>
        <h6 style={{color:"black"}}>SITDAVANH PHONSOULIKONE</h6>

          <div className="d-flex justify-content-center gap-3">
          <a
  href="https://facebook.com/yourbrideprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon facebook"
>
  <FacebookIcon fontSize="small" />
</a>

<a
  href="https://instagram.com/yourbrideprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon instagram"
>
  <InstagramIcon fontSize="small" />
</a>

          </div>
        </div>

      </div>
    </div>
  );
}
