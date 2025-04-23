// src/components/LoginModal.jsx
import React, { useState } from "react";
import { FiX, FiLogIn } from "react-icons/fi";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleLogin = () => {
    console.log("เข้าสู่ระบบด้วย:", email, password);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative font-prompt">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
        >
          <FiX className="text-xl" />
        </button>

        <div className="text-center mb-6">
          <FiLogIn className="text-3xl text-emerald-600 mx-auto" />
          <h2 className="text-xl font-bold mt-2 text-gray-800">เข้าสู่ระบบ</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">อีเมล</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-emerald-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">รหัสผ่าน</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-emerald-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md font-medium transition"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </div>
  );
}
