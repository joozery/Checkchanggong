// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logoช่าง.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50 font-prompt"> {/* 👈 ใช้ฟอนต์ Prompt ทั้ง Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* โลโก้ */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="เช็คช่างโกง" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800">
            เช็คช่างโกง
          </span>
        </div>

        {/* เมนูหลัก */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#check" className="hover:text-blue-600 transition">ค้นหาช่าง</a>
          <a href="#good" className="hover:text-blue-600 transition">ช่างงานดี</a>
          <a href="#bad" className="hover:text-blue-600 transition">ช่างโกง</a>
          <a href="#articles" className="hover:text-blue-600 transition">บทความ</a>
        </div>

        {/* CTA */}
        <div className="flex items-center space-x-2">
          <a
            href="#report"
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
          >
            แจ้งช่างโกง
          </a>
          <a
            href="#login"
            className="border border-blue-500 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition"
          >
            เข้าสู่ระบบ
          </a>
        </div>
      </div>
    </nav>
  );
}
