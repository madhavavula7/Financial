import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../service/authService";
import {
  FaWallet,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    dob: "",
    gender: "",
    country: "",
    currencyPreference: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        phoneNumber: form.phone,
        gender: form.gender,
        dateOfBirth: form.dob,
        country: form.country,
        currencyPreference: form.currencyPreference,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });

      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">

        <div className="grid lg:grid-cols-2">

          {/* LEFT SIDE (UNCHANGED) */}
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
              Take Control
              <br />
              of Your Money
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Track expenses, manage budgets, monitor savings,
              and build better financial habits with a clean
              and powerful finance platform.
            </p>

            <div className="mt-12 space-y-4">
              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold">Budget Management</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Plan and track monthly spending.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold">Expense Tracking</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Categorize and analyze transactions.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold">Financial Reports</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Get insights from spending patterns.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-12">

            <h2 className="text-3xl font-bold text-white text-center">
              Create Account
            </h2>

            <p className="text-slate-400 text-center mt-2 mb-8">
              Register to start managing your finances
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <input
                type="text"
                required
                placeholder="First Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white"
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />

              <input
                type="text"
                required
                placeholder="Last Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white"
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
              />

              <input
                type="text"
                required
                placeholder="Username"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white"
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
              />

              <input
                type="date"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white"
                onChange={(e) =>
                  setForm({ ...form, dob: e.target.value })
                }
              />

              <select
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white"
                required
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value })
                }
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              {/* COUNTRY DROPDOWN */}
              <select
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white"
                required
                onChange={(e) =>
                  setForm({ ...form, country: e.target.value })
                }
              >
                <option value="">Select Country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>

              {/* CURRENCY DROPDOWN (NEW FIELD) */}
              <select
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white"
                required
                onChange={(e) =>
                  setForm({ ...form, currencyPreference: e.target.value })
                }
              >
                <option value="">Select Currency</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </select>

              {/* EMAIL */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white"
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <FaPhone className="absolute left-4 top-4 text-slate-500" />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white"
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-12 text-white"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-slate-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* CONFIRM PASSWORD */}
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white"
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />

              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <input type="checkbox" />
                <span>I agree to Terms & Conditions</span>
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-slate-900 font-semibold py-3 rounded-xl"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}