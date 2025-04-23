import React, { useState } from "react";
import { FiSearch, FiLoader } from "react-icons/fi";
import backgroundImg from "../assets/bgsearch.jpg"; // 👈 ใช้รูป bg ที่วางไว้ใน src/assets/

function CheckSection() {
  const [form, setForm] = useState({
    name: "",
    bank: "",
    phone: "",
    idcard: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    setLoading(true);
    console.log("ค้นหา:", form);

    setTimeout(() => {
      setLoading(false);
      alert("📦 (จำลอง) ค้นหาเสร็จแล้ว");
    }, 2000);
  };

  return (
    <section
      className="min-h-[60vh] flex items-center justify-center px-4 py-10 font-prompt bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 transition-all">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <FiSearch className="text-emerald-600 text-2xl sm:text-3xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-600">
            ตรวจสอบข้อมูลช่าง
          </h2>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { name: "name", label: "ชื่อ - นามสกุล", placeholder: "เช่น สมชาย ช่างทอง" },
            { name: "bank", label: "เลขบัญชีธนาคาร", placeholder: "เช่น 123-4-56789-0" },
            { name: "phone", label: "เบอร์โทรศัพท์", placeholder: "เช่น 0812345678" },
            { name: "idcard", label: "เลขบัตรประชาชน", placeholder: "เช่น 1-2345-67890-12-3" }
          ].map(({ name, label, placeholder }) => (
            <div key={name}>
              <label className="block text-sm text-gray-700 font-medium mb-1">{label}</label>
              <input
                type="text"
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full border border-emerald-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 transition text-sm"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleSearch}
            disabled={loading}
            className={`bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 shadow-md transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <FiLoader className="animate-spin text-base" />
                กำลังค้นหา...
              </>
            ) : (
              <>
                <FiSearch className="text-base" />
                ค้นหา
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CheckSection;
