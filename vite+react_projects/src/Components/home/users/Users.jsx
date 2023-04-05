import React from "react";
// import Me from "../../../img/me.jpg";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "../homePart/Home.scss";
const Users = ({ users }) => {
  return (
    <div>
      {users.map((el) => (
        <div className="user">
          <div className="home_items_profile flex justify-between font-semibold text-slate-500 pl-6 pb-6 pr-6 mt-8 ">
            <div className="user_content flex gap-4">
              <div className="user_avatar w-16 h-16">
                {/* <img
                  src={Me}
                  className="img w-full h-full rounded-full"
                  alt="user_Avatar"
                /> */}
              </div>
              <div className="content">
                <p className="text-lg flex gap-1">
                  <span className=" text-black font-bold text-lg">
                    {el.job}
                  </span>
                  <span>{el.user} · 25m</span>
                </p>
                <p className="text-black font-normal text-lg">
                {el.comment}
                </p>
              </div>
            </div>
            <div className="icons">
              <NavLink>
                <FiMoreHorizontal className=" text-xl text-black" />
              </NavLink>
            </div>
          </div>

          <div className="icons flex items-center justify-between pt-5 pb-6 pl-24 pr-56 text-lg">
            <NavLink className="flex  gap-3  items-center">
              <BiMessageRounded className=" text-1xl" />
              <span className="text-1xl">0</span>
            </NavLink>
            <NavLink className="flex  gap-3  items-center">
              <FiRefreshCw className=" text-black-800  text-1xl" />
              <span className="text-1xl">0</span>
            </NavLink>
            <NavLink className="flex  gap-3  items-center">
              <AiOutlineHeart className=" text-1xl" />
              <span className="text-1xl">0</span>
            </NavLink>
            <NavLink className="flex  gap-3  items-center">
              <FiLogOut className="logoutIcon  text-1xl" />
              <span className="text-1xl">0</span>
            </NavLink>
            <NavLink className="flex  gap-3  items-center">
              <FiBarChart2 className=" text-1xl" />
              <span className="text-1xl">0</span>
            </NavLink>
          </div>

          <div className="hr"></div>
        </div>
      ))}
  
    </div>
  );
};

export default Users;