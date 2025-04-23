import React from "react";
import { FiFacebook, FiMail, FiPhone, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100 text-gray-700 font-prompt">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-emerald-600">เช็คช่างโกง</h2>
          <p className="text-sm text-gray-600 mt-2">
            ระบบตรวจสอบช่างงานดี / ช่างโกงเพื่อความปลอดภัยของผู้ใช้บริการ
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-md font-semibold text-emerald-700 mb-2">เมนูหลัก</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#check" className="hover:text-emerald-600">ค้นหาช่าง</a></li>
            <li><a href="#good" className="hover:text-emerald-600">ช่างงานดี</a></li>
            <li><a href="#bad" className="hover:text-emerald-600">ช่างโกง</a></li>
            <li><a href="#report" className="hover:text-emerald-600">แจ้งช่างโกง</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold text-emerald-700 mb-2">ติดต่อเรา</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone /> 098-765-4321
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> support@changcheck.com
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-md font-semibold text-emerald-700 mb-2">ติดตามเรา</h3>
          <div className="flex items-center gap-4 text-emerald-600 text-xl">
            <a href="#"><FiFacebook className="hover:text-emerald-800 transition" /></a>
            <a href="#"><FiGithub className="hover:text-emerald-800 transition" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-500 border-t border-emerald-100 py-4">
        © {new Date().getFullYear()} เช็คช่างโกง. All rights reserved.
      </div>
    </footer>
  );
}
