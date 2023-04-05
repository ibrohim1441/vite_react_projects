import { React } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../../img/twitter.png";
import { RiHome7Fill } from "react-icons/ri";
import { TbHash } from "react-icons/tb";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="border-2 ">
        <div className="header_items ml-32 mt-16 ">
          <div className="header_items_logo">
            {/* <NavLink>
              <img src={logo} alt="logo_twitter" />
            </NavLink> */}
          </div>

          <div className="header_items_nav mt-16">
            <NavLink className="flex items-center gap-3 mb-8">
              <RiHome7Fill className="text-2xl" />
              <span className="text-lg font-normal text-black ">Home</span>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-8">
              <TbHash className="text-2xl" />
              <span className="text-lg font-normal text-black ">Explore</span>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-8">
              <HiOutlineBell className="text-2xl" />
              <span className="text-lg font-normal text-black ">
                Notifications
              </span>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-8">
              <HiOutlineMail className="text-2xl" />
              <span className="text-lg font-normal text-black ">Messages</span>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-8">
              <BsBookmark className="text-2xl" />
              <span className="text-lg font-normal text-black ">Bookmarks</span>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-8">
              <RiFileList2Line className="text-2xl" />
              <span className="text-lg font-normal text-black ">Lists</span>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-8">
              <HiOutlineUser className="text-2xl" />
              <span className="text-lg font-normal text-black ">Profile</span>
            </NavLink>
            <NavLink className="flex items-center gap-3 mb-8">
              <CiCircleMore className="text-2xl" />
              <span className="text-lg font-normal text-black ">More</span>
            </NavLink>
          </div>

          <div className="header_items_btn mt-16">
            <button className="btn bg-blue-500 pt-4 pl-24 pb-4 pr-24 rounded-full text-white text-2xl">
              Tweet
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;