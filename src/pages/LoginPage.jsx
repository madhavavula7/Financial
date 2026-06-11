import React, { useState } from "react";
import { FaWallet, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">

        <div className="grid lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden lg:flex flex-col justify-center p-12 border-r border-slate-800">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center">
                <FaWallet className="text-white text-2xl" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-white">
                  FinanceTracker
                </h1>
                <p className="text-slate-400 text-sm">
                  Smart Personal Finance
                </p>
              </div>
            </div>

            <h2 className="text-5xl font-bold text-white leading-tight mb-6">
              Welcome
              <br />
              Back
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Sign in to continue tracking your expenses,
              managing budgets, and growing your savings.
            </p>
          </div>

          {/* Right Side */}
          <div className="p-8 md:p-12">

            <h2 className="text-3xl font-bold text-white text-center">
              Login
            </h2>

            <p className="text-slate-400 text-center mt-2 mb-8">
              Access your FinanceTracker account
            </p>

            <form className="space-y-5">

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-slate-500" />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-slate-500" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-12 text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-slate-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="flex justify-between text-sm">
                <label className="text-slate-400 flex items-center gap-2">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <a href="#" className="text-white">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-slate-900 font-semibold py-3 rounded-xl"
              >
                Login
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}