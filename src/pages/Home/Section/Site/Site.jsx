import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CiChat1, CiHome } from "react-icons/ci";
import { FaFile, FaImage, FaMicrophone, FaMoon } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader";
import { TiWorld } from "react-icons/ti";
import { BsCloudSun } from "react-icons/bs";
import Button from "../../../../Components/Button";

const Site = () => {
  const [prompt, setPrompt] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [languageoepn, setlanguageoepn] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  // all countries of languages

  // const coutnries_languaes  = ()=>{
  // }

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang.name);
    setOpen(false);
  };

  //   file open
  const handleClick = () => {
    setOpen(!open);
  };

  //   voice option
  const handleVoiceClick = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  //   ai promit answer
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm your AI Health Assistant. How are you feeling today?",
    },
  ]);

  const handleSend = () => {
    if (!prompt.trim()) return;

    const userMsg = { sender: "user", text: prompt };
    const aiReply = {
      sender: "ai",
      text: "It seems you might have a mild issue. Drink water, rest well, and if it continues, please contact a doctor.",
    };

    setMessages([...messages, userMsg, aiReply]);
    setPrompt("");
  };

  //   ai promit answer

  return (
    <div className="h-full w-full">
      <div className=" flex mt-2 items-end justify-end px-10 w-full">
      <Button text="Share" className="bg-[#232A27] px-9 py-3 text-[1vw]"/>

      </div>

      <div className="h-full  w-full grid grid-cols-[1fr_10fr]  p-4">

        <div className="h-full p-7">
          <div className="h-[80vh] gap-8 flex-col flex items-center py-8 justify-between w-full rounded-full bg-[#262D2A]">
            <div className="flex items-center justify-center flex-col gap-6">

              {" "}
              <Link to="/">
                <CiHome className="text-white cursor-pointer text-3xl" />
              </Link>
              <CiChat1 className="text-white cursor-pointer text-3xl" />
              <TiWorld
                onClick={() => setlanguageoepn(!languageoepn)}
                className="text-white cursor-pointer text-3xl"
              />
              {languageoepn && (
                <div className="absolute bottom-50 left-27 bg-white shadow-xl rounded-xl border border-gray-200 p-2 w-60 max-h-65 overflow-y-scroll borde z-50 animate-fadeIn">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      onClick={() => handleLanguageChange(lang)}
                      className={`actay w-full flex items-center gap-2 text-left px-3 py-2 rounded-md text-sm hover:bg-gray-100 ${
                        lang.name === selectedLang ? "bg-gray-100 " : ""
                      }`}
                    >
                      <span>{lang.flag}</span> {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-8 flex-col">
              <AiOutlineLogout className="text-white cursor-pointer  text-2xl" />
              <button
                onClick={handleToggle}
                className="flex items-center justify-center  rounded-full transition-all duration-300 hover:scale-110"
              >
                {isDark ? (
                  <BsCloudSun className="text-white text-1xl cursor-pointer transition-transform duration-300 hover:rotate-180" />
                ) : (
                  <FaMoon className="text-white text-1xl cursor-pointer transition-transform duration-300 hover:rotate-180" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="h-full w-full overflow-hidden  rounded-3xl">
          <Loader />

          <div className="h-full relative p-3">
            <div className="flex-1 overflow-y-auto py-5 space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-3 rounded-4xl text-sm ${
                      msg.sender === "user"
                        ? "border-1 border-gray-700 , text-black"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="py-4 flex items-center  justify-between px-4 rounded-full min-w-[95%] border border-[#e2e0e0] absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#FFFFFF] shadow-md">
              <div className="flex items-center gap-3">
                <GoPlus
                  onClick={handleClick}
                  className="text-3xl text-gray-700  cursor-pointer hover:text-black transition"
                />

                {/* Popup Menu */}
                {open && (
                  <div className="absolute py-7 bottom-12 left-0 bg-white shadow-xl rounded-xl border border-gray-200 px-6 flex flex-col gap-5 z-50 animate-fadeIn">
                    <button className="actay font-[500] flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md transition  text-gray-900">
                      <FaImage className="text-black" /> Add Photo
                    </button>
                    <button className="actay flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md transition  text-gray-900">
                      <FaFile className="text-black" /> Upload File
                    </button>
                  </div>
                )}
              </div>

              <input
                onChange={(e) => setPrompt(e.target.value)}
                type="text"
                placeholder="Enter a prompt..."
                className="flex-1 outline-none border-none text-black text-[16px] bg-transparent px-2"
              />

              {/* Icons Section */}
              <div className="flex items-center gap-3">
                <FaMicrophone
                  onClick={handleVoiceClick}
                  className="text-xl text-gray-700 cursor-pointer hover:text-black transition"
                />
                {showPopup && (
                  <div className="actay absolute bottom-30 left-1/2 -translate-x-1/2 bg-[#262D2A] text-white text-[0.9vw] px-6 py-5 rounded-full shadow-md animate-fadeIn">
                    This feature is not available yet.
                  </div>
                )}

                <IoIosSend
                  onClick={handleSend}
                  className="text-2xl text-gray-700 cursor-pointer hover:text-black transition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Site;
