import React from "react";
// import star from "../../../img/star.png";
import "../homePart/Home.scss";
// import Me from "../../../img/me.jpg";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Users from "../users/Users";
const Home = () => {
  const users = [
    {
      job: "Designsta",
      user: "@inner",
      comment:
        "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?"
    },
    {
      job: "cloutexhibition",
      user: "@RajLahoti",
      comment:
        "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam."
    },
  ];
  return (
    <>
      <div className="home border-2 ">
        <div className="home_items  ">
          <div className="home_items_title pl-6 pt-6 pb-6 pr-6  flex justify-between">
            <h1 className="font-bold text-2xl">Home</h1>
            {/* <img src={star} className="w-7 h-7" alt="star" /> */}
          </div>

          <div className="hr"></div>

          <div className="home_items_profile flex items-center gap-4 font-semibold text-slate-500 pl-6 pb-6 pr-6 ">
            <div className="user_avatar w-16 h-16">
              {/* <img
                src={Me}
                className="img w-full h-full rounded-full"
                alt="user_Avatar"
              /> */}
            </div>
            <div className="content">
              <p className="text-lg">What’s happening</p>
            </div>
          </div>
          <div className="icons pl-24  flex gap-6">
            <NavLink>
              <RiGalleryFill className=" text-cyan-400 text-2xl" />
            </NavLink>
            <NavLink>
              <MdOutlineGifBox className=" text-cyan-400 text-2xl" />
            </NavLink>
            <NavLink>
              <AiOutlineBarChart className=" text-cyan-400 text-2xl" />
            </NavLink>
            <NavLink>
              <BsEmojiSmile className=" text-cyan-400 text-2xl" />
            </NavLink>
            <NavLink>
              <TbCalendarStats className=" text-cyan-400 text-2xl" />
            </NavLink>
          </div>

          <div className="btn flex justify-end pr-5">
            <button className=" bg-sky-500 text-white pt-4 pl-8 pr-8 pb-4 mt-3 mb-3 rounded-full">
              Tweet
            </button>
          </div>
          <div className="hr"></div>
          <Users users={users}/>
        </div>
      </div>
    </>
  );
};

export default Home;