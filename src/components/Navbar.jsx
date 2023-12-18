import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = ({setSection, section}) => {
  const [t,i18n ] = useTranslation("global");
  return (
    <div className="py-6 fixed z-30 w-full">
      <nav className="flex w-full justify-center">
        <div className="flex items-center justify-center rounded-full bg-gray-900 text-white font-semibold py-1 px-4 space-x-4 focus:outline-none relative">
          {/* <span className="absolute bg-orange-500 w-20 h-10 rounded-3xl"></span> */}{/*left-2/3   left-6      right-5*/}
          <button
            className={`hover:bg-gray-100 ${section=='all'?'bg-secundario':''} rounded-full hover:rounded-3xl p-2 dark:hover:bg-gray-600 focus:outline-none z-10`}
            onClick={() => setSection('all')}
          >
            {t('navbar.home')}
          </button>
          <button
            className={`hover:bg-gray-100 ${section=='about'?'bg-secundario':''} rounded-full hover:rounded-3xl p-2 dark:hover:bg-gray-600 focus:outline-none z-10`}
            onClick={() => setSection('about')}
          >
            {t('navbar.about')}
          </button>
          <button
            className={`hover:bg-gray-100 ${section=='contact'?'bg-secundario':''} rounded-full hover:rounded-3xl p-2 dark:hover:bg-gray-600 focus:outline-none z-10`}
            onClick={() => setSection('contact')}
            id="Contact"
          >
            {t('navbar.contact')}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
