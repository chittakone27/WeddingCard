import { useEffect, useRef } from "react";

declare global {
  interface Window {
    FB: any;
  }
}

interface FacebookCommentsProps {
  url: string;
  numPosts?: number;
}

const FacebookComments: React.FC<FacebookCommentsProps> = ({ url, numPosts = 5 }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load SDK if not already
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/lo_LA/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      document.body.appendChild(script);

      // Wait until FB is ready
      script.onload = () => {
        window.FB && window.FB.XFBML.parse(divRef.current);
      };
    } else {
      // SDK loaded, parse just this div
      window.FB && window.FB.XFBML.parse(divRef.current);
    }
  }, []);

  return (
    <div
      ref={divRef}
      className="fb-comments"
      data-href={url}
      data-width="100%"
      data-numposts={numPosts}
      data-colorscheme="light"
    ></div>
  );
};

export default FacebookComments;
