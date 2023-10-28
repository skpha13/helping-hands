import React from "react";
import { Outlet, Link } from "react-router-dom";
import LogoImg from "../../assets/logo/logo-png-256.png";
import user_icon from "../../assets/user_icon.png";

const Navbar = ({ links }) => {
  return (
    <>
      <div className="flex flex-row bg-white m-2 justify-center rounded-lg p-2 justify-between items-center">
        <Link to='/'><img src={LogoImg} alt="logo-img" className="max-w-[48px]" />
        </Link>
        <div>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.path}
                className="mr-10 text-gray p-2 rounded-lg text-lg"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <img src={user_icon} alt="user icon" className="max-w-[48px]" />
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
