import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialIcon } from 'react-social-icons'
const SocialShare = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Share Button */}
      <button
                className="actay mt-3 cursor-pointer bg-[#232A27] px-9 py-3 text-[1vw] rounded-3xl text-white "
                onClick={() => setIsOpen(true)}   // ← button click pe popup open
      >
        Share
      </button>

      {/* Popup Animation Wrapper */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background Blur */}
            <div
              className="absolute inset-0  bg-opacity-40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Popup Box */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 40 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white rounded-xl p-8 w-100 flex flex-col items-center gap-4 z-10 shadow-xl"
            >
              <h3 className="actay text-lg ">Share this</h3>

              <div className="flex justify-around w-full text-2xl">
              <SocialIcon url="https://wa.me/923000000000" />    
<SocialIcon url="https://instagram.com/yourid" />    
<SocialIcon url="https://facebook.com/yourid" />     
              </div>

              <button
                className="actay mt-3 cursor-pointer bg-[#232A27] px-9 py-3 text-[1vw] rounded-3xl text-white "
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialShare;
