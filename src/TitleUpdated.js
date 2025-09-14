import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const pageTitles = {
            "/": "Home - Musa Al Raza Tours & Travels - Explore the world with us",
            "/about": "About - Musa Al Raza Tours & Travels - Explore the world with us",
            "/contact": "Contact - Musa Al Raza Tours & Travels - Explore the world with us",
            "/ServicesPage": "Services - Musa Al Raza Tours & Travels - Explore the world with us",
            "/ImageSlider": "Countries - Musa Al Raza Tours & Travels - Explore the world with us",
        };

        // Default title if page not listed
        document.title = pageTitles[location.pathname] || "Musa Al Raza Tours & Travels - Explore the world with us";
    }, [location.pathname]);

    return null;
};

export default TitleUpdater;
