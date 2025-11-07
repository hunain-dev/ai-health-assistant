import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
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
          <h1 className="actay text-[1.3vw] mt-6 ">AI Health Login</h1>
          <p className="actay text-sm text-gray-300 mt-2">
            Welcome back! Please sign in to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="actay block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="yourname@example.com"
              value={formData.email}
              onChange={handleChange}
              className="actay w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 focus:border-green-400 outline-none text-white placeholder-gray-400 transition"
              required
            />
          </div>

          <div>
            <label className="actay block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="actay w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-600 focus:border-green-400 outline-none text-white placeholder-gray-400 transition"
              required
            />
          </div>

          <div className="actay flex justify-between text-sm text-gray-400">
            <a href="#" className="hover:text-green-400">
              Forgot password?
            </a>
           <Link to="/Signup">
           <a  className="hover:text-green-400">
              Create account
            </a>
           </Link> 
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="actay font-[500] w-full bg-[#262D2A] hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
