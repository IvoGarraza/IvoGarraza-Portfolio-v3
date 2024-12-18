/* import React, { useState } from "react";

const NavbarDos = ({ setSection, section }) => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "About Us", icon: "person-outline", dis: "translate-x-1/2" },
    { name: "Contact", icon: "mail-open-outline", dis: "translate-x-full" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="fixed h-20 w-full bg-[#090a13f2] px-6 bottom-0 z-50">
      <ul className="flex w-full justify-around">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, index) => (
          <li>
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(index)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  index === active && "-mt-6 text-white"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={` ${
                  active === index
                    ? "translate-y-4 duration-700 opacity-100 text-white"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarDos;
 */

import React, { useState } from "react";

const NavbarDos = ({ setSection, section }) => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "left-14 sm:left-[13.25rem]", section:'all' },
    { name: "About Us", icon: "person-outline", dis: "left-[48%] sm:left-[49.5%]", section:'about' },
    { name: "Contact", icon: "mail-open-outline", dis: "left-[calc(100%-3.8rem)] sm:left-[83.3%] ", section:'contact' },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="fixed h-20 w-full bg-[#090a13] px-6 bottom-0 z-50 ">
      <ul className="flex w-full justify-around relative">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 w-16 h-16 absolute
          -top-3 rounded-full transform -translate-x-1/2`}
        ></span>
        {Menus.map((menu, index) => (
          <li key={index} className="relative flex justify-center items-center">
            <a
              className="flex flex-col justify-center items-center text-center pt-6"
              onClick={() => {setActive(index);setSection(menu.section)}}
            >
              <span
                className={`text-xl cursor-pointer duration-500 flex text-white justify-center items-center ${
                  index === active && "-mt-8 text-white"
                }`}
              >
                <ion-icon name={menu.icon} class="text-2xl"></ion-icon>
              </span>
              <span
                className={`${
                  active === index
                    ? "translate-y-4 duration-700 opacity-100 text-white"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default NavbarDos;
