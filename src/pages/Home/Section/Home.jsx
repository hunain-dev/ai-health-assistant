import Header from "../../../Components/Header";
import { CiCirclePlus } from "react-icons/ci";
import Button from "../../../Components/Button";
import { IoIosSend } from "react-icons/io";
import frameflowesr from "../../../assets/images/grass-flowers-realistic-border-vector-removebg-preview.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Components/Loader";
import Login from "../../Forms/Login";
import Signup from "../../Forms/Signup";
const Home = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    // const [showLogin, setShowLogin] = useState(false);
    // const [showSignup, setShowSignup] = useState(false);

    // timer after 5 sec login page open

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setShowLogin(true);
    //     }, 5000);
      
    //     return () => clearTimeout(timer);
    //   }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
          navigate("/Site");
        }
      };

  return (
    <>
      <div className="h-full w-full  ">
      <Loader />
{/* {showLogin && !showSignup && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="w-full max-w-md">
      <Login onSubmit={() => setShowLogin(false)} />

      <p
        className="text-sm text-gray-300 mt-3 cursor-pointer hover:text-green-400 text-center"
        onClick={() => {
          setShowLogin(false);   
          setShowSignup(true);   
        }}
      >
        Create an account
      </p>
    </div>
  </div>
)} */}


        <Header />
        <div className="h-full w-full  mt-7 grid grid-cols-1 ">
          <div className="h-full w-full    ">
            <div className="h-full flex items-center justify-start flex-col w-full">
              <h2 className="actay text-center text-4xl leading-9">
                AI that cares — because <br />
                your health matters.
              </h2>
              <p className="actay text-[1.2vw] mt-4">
                "AI that cares — because your health matters."
              </p>

              <div className="h-full  mt-10 w-full flex px-10  items-center justify-center ">
                <div className="py-6  grid grid-cols-1 gap-19 rounded-3xl min-w-[49%]  overflow-hidden bg-[#232A27] ">
                  <input
                    type="text"
                    placeholder="Ask me anything about your health — symptoms, or tips to feel better!"
                    className="actay px-3 border-0 text-white w-full py-2 bg-transparent outline-none placeholder-white"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />

                  <div className="h-full w-full  grid grid-cols-[2fr_1.1fr]">
                    <div className="h-full px-3 flex items-center justify-start  gap-2">
                      <CiCirclePlus className="text-3xl text-white" />
                      <Button
                        text="Select a languags"
                        className="bg-none border-1 text-[0.8vw] border-white text-white px-6 py-0.3"
                      />
                      <Button
                        text="Add an image"
                        className="bg-none border-1 text-[0.8vw] border-white text-white px-7 py-1"
                      />
                    </div>
                    <div className="h-full  flex items-center mt-1 justify-end px-5">
                    <IoIosSend className="text-2xl text-white cursor-pointer hover:text-black transition"             onClick={() => input.trim() !== "" && navigate("/Site")}
 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full  w-full">
            <div className="back relative -top-20 h-full w-full flex items-center justify-center ">
              <div className="flex items-center justify-center h-full w-full overflow-hidden">
                <img
                  src={frameflowesr}
                  className="h-full w-full object-cover  brightness-65 "
                  alt=""
                />
                <img
                  src={frameflowesr}
                  className="h-full w-full object-cover  brightness-65 "
                  alt=""
                />
                <img
                  src={frameflowesr}
                  className="h-full w-full object-cover  brightness-65"
                  alt=""
                />
              </div>

              <div className="front absolute grid  px-3 py-5 grid-cols-2 top-65 overflow-hidden left-0 min-h-[33vh] bg-[#262D2A] w-full z-10">
                <div className="h-full text-white opacity-80 flex items-center justify-start ">
                  <h4 className="actay text-[1.6vw] leading-7">
                    A smart path to <br />
                    stay ahead of ilness
                  </h4>
                </div>
                <div className="h-full text-white px-9 w-1xl opacity-80 flex items-center justify-start ">
                  <p className="actay text-[1.5vw] ">
                    A paragraph is a distinct section of a wriconsisting of one
                    or more sentences. It is typically marked by an indent on a
                    new line
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
