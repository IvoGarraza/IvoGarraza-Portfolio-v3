import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonNavbar } from "./Buttons/ButtonNavbar";
import BotHome from "../assets/svg/bot/BotHome";
import Loader from "./loader/Loader";

const Navbar = ({ setSection, section }) => {
  const [t, i18n] = useTranslation("global");
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSectionChange = (newSection) => {
    console.log("Cambiando a sección:", newSection);
    setSection(newSection);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Si scrollea hacia abajo y ya ha scrolleado una cierta cantidad
      setShowNavbar(true);
    } else if (window.scrollY < lastScrollY) {
      // Si scrollea hacia arriba
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="py-6 fixed bottom-0 z-30 w-full">
      {/* <Loader/> */}
      <nav
        className={`flex w-full justify-center transition-all duration-1000 ${
          showNavbar ? "translate-y-24" : "-translate-y-0"
        }`}
      >
        <div className="flex items-center justify-center rounded-full bg-gray-900 text-white font-semibold py-1 px-4 space-x-4 focus:outline-none relative">
          <a onClick={() => setSection("all")} className="cursor-pointer">
            <ButtonNavbar text={`${t("navbar.home")}`}></ButtonNavbar>
          </a>
          <a onClick={() => setSection("about")} className="cursor-pointer">
            <ButtonNavbar
              text={`${t("navbar.about")}`}
            ></ButtonNavbar>
          </a>
          <a onClick={() => setSection("contact")} className="cursor-pointer">
            <ButtonNavbar
              text={`${t("navbar.contact")}`}
            ></ButtonNavbar>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
