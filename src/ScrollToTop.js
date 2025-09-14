// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Navigated to:", pathname);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.documentElement.scrollTop = 0; // fallback
    document.body.scrollTop = 0;            // fallback for Safari
  }, [pathname]);

  return null;
}


