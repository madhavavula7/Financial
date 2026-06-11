import React from "react";
import { Link } from "react-router-dom";
import {
  FaWallet,
  FaMoneyBillWave,
  FaPiggyBank,
  FaChartPie,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <FaWallet className="text-3xl text-green-400" />
          <h1 className="text-2xl font-bold">FinanceTracker</h1>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 border border-slate-700 rounded-xl hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-white text-black rounded-xl font-semibold"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">

        <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">
          Smart Personal Finance Management
        </span>

        <h1 className="text-6xl font-bold mt-8 leading-tight">
          Track Every
          <span className="block text-green-400">
            Rupee You Spend
          </span>
        </h1>

        <p className="mt-6 text-slate-400 text-xl max-w-4xl mx-auto">
          FinanceTracker helps users manage income, track expenses,
          create budgets, monitor savings, analyze spending habits,
          generate financial reports and achieve financial goals
          through powerful insights and analytics.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Link
            to="/register"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            Get Started
          </Link>

        </div>

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-2xl mx-auto">

  <h3 className="text-2xl font-bold text-white mb-4">
    Ready to Get Started?
  </h3>

  <p className="text-slate-400 mb-6">
    Join FinanceTracker today and take complete control of your finances,
    expenses, budgets, savings goals, and financial reports.
  </p>

</div>

      </section>

      {/* About Project */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          About FinanceTracker
        </h2>

        <p className="text-slate-400 text-center text-lg max-w-5xl mx-auto leading-relaxed">
          FinanceTracker is a modern personal finance management
          application that helps users manage their finances effectively.
          Users can track income and expenses, create monthly budgets,
          monitor savings, set financial goals, analyze spending
          patterns and generate detailed reports for smarter
          financial decisions.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaMoneyBillWave className="text-5xl text-green-400 mb-5" />
            <h3 className="text-2xl font-semibold">
              Expense Tracking
            </h3>
            <p className="text-slate-400 mt-3">
              Track daily income and expenses with complete transaction history.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaChartPie className="text-5xl text-blue-400 mb-5" />
            <h3 className="text-2xl font-semibold">
              Budget Planning
            </h3>
            <p className="text-slate-400 mt-3">
              Create monthly budgets and control unnecessary spending.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaPiggyBank className="text-5xl text-yellow-400 mb-5" />
            <h3 className="text-2xl font-semibold">
              Savings Goals
            </h3>
            <p className="text-slate-400 mt-3">
              Set financial goals and monitor progress toward achieving them.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-green-400">1</h3>
              <p className="mt-2">Register Account</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-green-400">2</h3>
              <p className="mt-2">Add Income</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-green-400">3</h3>
              <p className="mt-2">Track Expenses</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-green-400">4</h3>
              <p className="mt-2">Analyze Reports</p>
            </div>

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose FinanceTracker?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-lg">

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            ✔ Better money management
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            ✔ Reduce unnecessary expenses
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            ✔ Build saving habits
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            ✔ Detailed financial reports
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            ✔ Financial goal tracking
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            ✔ Easy and secure platform
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-5xl font-bold">
          Start Your Financial Journey Today
        </h2>

        <p className="text-slate-400 text-lg mt-6">
          Take control of your money and build a brighter future.
        </p>

        <div className="flex justify-center gap-4 mt-10">

          <Link
            to="/register"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="border border-slate-700 px-8 py-4 rounded-xl"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        ©️ 2026 FinanceTracker • Smart Personal Finance Management
      </footer>

    </div>
  );
}