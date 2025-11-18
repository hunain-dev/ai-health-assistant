import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
 const [name, setname] = useState("")
 const [email, setemail] = useState("")
 const [password, setpassword] = useState("")
 const [Confirmpassword, setConfirmpassword] = useState("")


 const handleSubmit = (e) => {
  e.preventDefault(); 

  if (password !== Confirmpassword) {
    alert("Your confirm password does not match with password");
  } else {
    alert("Hey! Your confirm password is correct");
  }
};




  return (
    <div className="min-h-screen flex items-center justify-center  text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-[#262D2A] shadow-xl rounded-2xl p-8 w-full max-w-md border border-white/10"
      >
        <div className="flex flex-col items-center mb-6">
          <FaHeartbeat className="text-5xl text-green-400 mb-2" />
          <h1 className="actay text-[1.3vw] mt-1 ">AI Health Signup</h1>
          <p className="actay text-sm text-gray-300 mt-2">
            Welcome back! Please sign-up then continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
        <div>
            <label className="actay block text-sm mb-1">Full name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setname(e.target.value)}  

              className="actay w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 focus:border-green-400 outline-none text-white placeholder-gray-400 transition text-sm"
              required
            />
          </div>
          <div>
            <label className="actay block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}  
              placeholder="yourname@example.com"
              className="actay w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 focus:border-green-400 outline-none text-white placeholder-gray-400 transition text-sm"
              required
            />
          </div>

          <div>
            <label className="actay block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setpassword(e.target.value)}  
              className="actay w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 focus:border-green-400 outline-none text-white placeholder-gray-400 transition text-sm"
              required
            />
          </div>

          <div>
            <label className="actay block text-sm mb-1">Confrim password</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Enter your Confirm password"
              value={Confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}  
              className="actay w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 focus:border-green-400 outline-none text-white placeholder-gray-400 transition text-sm"
              required
            />
          </div>
        

          <div className="actay flex justify-between text-sm text-gray-400">
          
       <Link to="/Login" 
        className="hover:text-green-400"
       
       >
            Already have an account
            
       </Link>   
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="actay font-[500] w-full bg-[#262D2A] hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
