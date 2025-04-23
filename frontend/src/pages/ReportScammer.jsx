import React, { useState } from "react";
import { FiAlertTriangle, FiSend } from "react-icons/fi";

export default function ReportScammer() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    platform: "",
    amount: "",
    details: ""
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSending(true);
    console.log("📤 รายงานช่างโกง:", form);

    setTimeout(() => {
      setSending(false);
      alert("📦 รายงานช่างโกงสำเร็จ (จำลอง)");
      setForm({
        name: "",
        service: "",
        platform: "",
        amount: "",
        details: ""
      });
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-white py-12 px-4 font-prompt">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <FiAlertTriangle className="text-red-500 text-2xl" />
          <h2 className="text-2xl font-bold text-emerald-700">แจ้งช่างโกง</h2>
        </div>

        <div className="space-y-5 text-sm">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">ชื่อช่าง / บริษัท</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="กรอกชื่อช่างหรือชื่อบริษัท"
              className="w-full border border-emerald-200 px-4 py-2 rounded-md focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">ประเภทบริการ</label>
            <input
              type="text"
              name="service"
              value={form.service}
              onChange={handleChange}
              placeholder="เช่น ซ่อมแอร์, ปูกระเบื้อง"
              className="w-full border border-emerald-200 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">แพลตฟอร์มที่เจอ</label>
            <input
              type="text"
              name="platform"
              value={form.platform}
              onChange={handleChange}
              placeholder="เช่น Facebook, Marketplace, Line"
              className="w-full border border-emerald-200 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">มูลค่าความเสียหาย (บาท)</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="เช่น 3500"
              className="w-full border border-emerald-200 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">รายละเอียดเพิ่มเติม</label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="เล่ารายละเอียดเหตุการณ์เพิ่มเติม เช่น ไม่มาตามนัด รับเงินแล้วหาย ฯลฯ"
              className="w-full border border-emerald-200 px-4 py-2 rounded-md h-28 resize-none"
            ></textarea>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              disabled={sending}
              className={`bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 transition ${
                sending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <FiSend className="text-base" />
              {sending ? "กำลังส่ง..." : "ส่งรายงาน"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
