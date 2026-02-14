import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 px-4"
    >
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
          {state === "Sign Up" ? "Create Account" : "Log In"}
        </h2>

        {/* Small Paragraph */}
        <p className="text-center text-white/80 text-sm mb-6">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an
          appointment
        </p>

        {/* Name field only in Sign Up */}
        {state === "Sign Up" && (
          <div className="mb-5">
            <label className="block text-white mb-2 text-sm">Full Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-5">
          <label className="block text-white mb-2 text-sm">Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-white mb-2 text-sm">Password</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold text-white 
        bg-gradient-to-r from-indigo-500 to-purple-500 
        hover:from-purple-500 hover:to-indigo-500 
        transition-all duration-500 shadow-lg hover:shadow-2xl active:scale-95"
        >
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </button>

        {/* Toggle */}
        <p className="text-center text-white/80 mt-6 text-sm">
          {state === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-white font-semibold cursor-pointer hover:underline"
          >
            {state === "Sign Up" ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
