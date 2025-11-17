import axios from "axios";
import React, { useEffect, useState } from "react";
import { TiWorld } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

const countrylan = "https://restcountries.com/v3.1/all?fields=name,cca2";
const WorldLanguages = () => {
  const [open, setOpen] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const api_hanlder = async () => {
      try {
        const response = await axios.get(countrylan);
        const data = response.data;
        console.log("data was found", data);
        setCountries(data);
      } catch {
        console.log("error found ohoo api no trunning");
      }
    };
    api_hanlder();
  }, []);

  return (
    <div>
      <TiWorld
        className="text-white cursor-pointer text-3xl"
        onClick={() => setOpen(true)}
      />


       {/* POPUP */}
       <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center"
            onClick={() => setOpen(false)}
          >

            {/* POPUP BOX */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white p-5 rounded-xl w-80 max-h-96 overflow-y-scroll z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-3">Select Country</h2>

              {countries.length === 0 && (
                <p className="text-gray-600 text-sm">Loading...</p>
              )}

              <div className="flex flex-col gap-2">
                {countries.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer flex justify-between"
                  >
                    <span>{item?.name?.common}</span>
                    <span className="font-bold">{item?.cca2}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorldLanguages;
