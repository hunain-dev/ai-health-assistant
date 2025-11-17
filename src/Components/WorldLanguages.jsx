import axios from "axios";
import React, { useEffect, useState } from "react";
import { TiWorld } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

const countrylan = "https://restcountries.com/v3.1/all?fields=name,cca2";
const WorldLanguages = () => {
  const [open, setOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

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

  // Filtered Countries
  const filteredCountries = countries.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TiWorld
        className="text-white cursor-pointer text-3xl"
        onClick={() => setOpen(!open)} // ← toggle kar diya
      />

      {/* POPUP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-58 left-23  flex justify-center items-center"
            onClick={() => setOpen(false)}
          >
            {/* POPUP BOX */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white p-5 rounded-xl max-w-85 max-h-66 overflow-y-scroll z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {countries.length === 0 && (
                <p className="text-gray-600 text-sm">Loading...</p>
              )}
              {/* SEARCH INPUT */}
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <div className="flex flex-col gap-4">
                {filteredCountries.length === 0 ? (
                  <p className="actay text-gray-500 text-sm">No countries found</p>
                ) : (
                  filteredCountries.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer flex justify-between"
                    >
                      <span>{item.name.common}</span>
                      <span className="font-bold">{item.cca2}</span>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorldLanguages;
