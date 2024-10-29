import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Wave from "react-wavify";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import GenericHeading from "../components/GenericHeading";
const ContactUs = () => {
  const userDetails = {
    username: "",
    useremail: "",
    userphoneNUmber: "",
    usermessage: "",
  };

  const [userDetail, setUserDetail] = useState(userDetails);

  useEffect(() => {
    console.log(userDetail);
  }, [userDetail]);

  const detailsHandler = (e, id) => {
    if (id.includes("username")) {
      setUserDetail((prev) => {
        return {
          ...prev,
          [e.target.id]: e.target.value,
        };
      });
    } else if (id.includes("useremail")) {
      setUserDetail((prev) => {
        return {
          ...prev,
          [e.target.id]: e.target.value,
        };
      });
    } else if (id.includes("userphoneNUmber")) {
      setUserDetail((prev) => {
        return {
          ...prev,
          [e.target.id]: e.target.value,
        };
      });
    } else if (id.includes("usermessage")) {
      setUserDetail((prev) => {
        return {
          ...prev,
          [e.target.id]: e.target.value,
        };
      });
    }
  };

  //dummy data

  return (
    <>
      <Element name="Contact" className="element">
        <div
          className="flex flex-col items-center justify-center bg-orange-100 z-10  pb-32
        relative"
        >
          <ul className="circle">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <motion.h2
            className="font-medium text-2xl md:text-5xl font-poppins py-8 flex "
            whileHover={{ scale: 1.1 }}
          >
            <GenericHeading title=" Send me a message!" />
          </motion.h2>

          <form className="w-[65%] py-6 z-[80]">
            <div class="relative z-0 w-full mb-5 group py-4">
              <input
                type="text"
                name="floating_email"
                // id="floating_email"
                class="block py-2.5 px-0 w-full  bg-transparent border-0 text-gray-700 
                  border-b-2 border-orange-400 appearance-none dark:text-white
                   dark:border-gray-600
                  dark:focus:border-blue-500 focus:outline-none focus:ring-0 
                   peer"
                onChange={(e) => detailsHandler(e, "username")}
                value={userDetail?.username}
                placeholder=""
                required
                id="YOUR NAME"
              />
              <label
                htmlFor="YOUR NAME"
                class="peer-focus:font-medium font-poppins absolute text-sm text-orange-500 
                dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 
                -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                YOUR NAME
              </label>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6 py-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    class="block py-2.5 px-0 w-full font-poppins bg-transparent border-0 text-gray-700 
                  border-b-2 border-orange-400 appearance-none dark:text-white
                   dark:border-gray-600
                  dark:focus:border-blue-500 focus:outline-none focus:ring-0 
                   peer"
                    value={userDetail?.useremail}
                    onChange={(e) => detailsHandler(e, "useremail")}
                    placeholder=""
                    required
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-orange-500 font-poppins
                dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 
                -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    YOUR EMAIL ADDRESS
                  </label>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_email"
                    id="floating_email"
                    class="block py-2.5 px-0 w-full font-poppins bg-transparent border-0 text-gray-700 
                  border-b-2 border-orange-400 appearance-none dark:text-white
                   dark:border-gray-600
                  dark:focus:border-blue-500 focus:outline-none focus:ring-0 
                   peer"
                    value={userDetail?.userphoneNUmber}
                    maxLength="10"
                    onChange={(e) => detailsHandler(e, "userphoneNUmber")}
                    placeholder=""
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium font-poppins absolute text-sm text-orange-500 
                dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 
                -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    YOUR PHONE NUMBER
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 py-4">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full font-poppins bg-transparent border-0 text-gray-700 
                  border-b-2 border-orange-400 appearance-none dark:text-white
                   dark:border-gray-600
                  dark:focus:border-blue-500 focus:outline-none focus:ring-0 
                   peer"
                  value={userDetail?.usermessage}
                  onChange={(e) => detailsHandler(e, "usermessage")}
                  placeholder=""
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-orange-500 font-poppins
                dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 
                -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  WRITE YOUR MESSAGE
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="border-2 border-orange-500 text-orange-500 font-bold rounded-sm font-poppins
              px-16 py-2 my-4 hover:bg-orange-500 hover:text-orange-100"
            >
              <span className="flex items-center justify-center ga">
                <span> SHOOT </span>
                {<FaLongArrowAltRight />}
              </span>
            </button>
          </form>

          <Wave
            fill="#F97316"
            paused={false}
            style={{
              display: "flex",
              zIndex: 99,
              position: "absolute",
              bottom: 0,
            }}
            options={{
              height: 10,
              amplitude: 20,
              speed: 0.35,
              points: 3,
            }}
          />
        </div>
      </Element>
    </>
  );
};

export default ContactUs;
