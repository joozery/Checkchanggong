import React from "react";
import { Link } from "react-router-dom";

const TrustedWorkerSection = () => {
  const goodWorkers = [
    {
      name: "ช่างป๊อป งานละเอียด",
      reviewCount: 48,
      stars: 5,
      service: "ติดตั้งไฟฟ้า",
      platform: "Facebook: รีวิวช่างดีจริง",
      date: "22-04-2025",
      ref: "T001"
    },
    {
      name: "คุณพงษ์ บริการรวดเร็ว",
      reviewCount: 36,
      stars: 5,
      service: "ปูกระเบื้อง",
      platform: "Line: @trustedworker",
      date: "21-04-2025",
      ref: "T002"
    },
    {
      name: "คุณหญิง งานเนี้ยบ",
      reviewCount: 29,
      stars: 4.5,
      service: "ต่อเติมบ้าน",
      platform: "เว็บ: trustedcontractor.com",
      date: "20-04-2025",
      ref: "T003"
    },
    {
      name: "ช่างแมน วางระบบไฟ",
      reviewCount: 15,
      stars: 4.8,
      service: "ระบบไฟฟ้า",
      platform: "Facebook: รวมรีวิวช่างดี",
      date: "19-04-2025",
      ref: "T004"
    },
    {
      name: "คุณโอ๋ ปูกระเบื้องตรงเป๊ะ",
      reviewCount: 22,
      stars: 4.9,
      service: "ปูกระเบื้อง",
      platform: "กลุ่มบ้านปลอดภัย",
      date: "18-04-2025",
      ref: "T005"
    }
  ];

  return (
    <section className="bg-white py-10 text-gray-800 font-prompt">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-emerald-700 mb-6">รายการช่างดีล่าสุด</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {goodWorkers.map((worker, index) => (
            <div
              key={index}
              className="border border-emerald-300 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-sm text-gray-800 font-medium mb-1">
                <span className="text-emerald-600">ชื่อช่าง:</span> {worker.name} ({worker.reviewCount} รีวิว, ⭐ {worker.stars})
              </p>
              <p className="text-sm text-gray-600">บริการ: <span className="text-gray-800 font-medium">{worker.service}</span></p>
              <p className="text-sm text-gray-600">แพลตฟอร์ม: <span className="text-gray-800 font-medium">{worker.platform}</span></p>
              <p className="text-sm text-gray-600">รีวิวล่าสุด: {worker.date}</p>
              <Link
                to={`/trusted/${worker.ref}`}
                className="text-sm text-gray-500 mt-1 inline-block hover:underline hover:text-blue-600 transition"
              >
                ดูรายละเอียด
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedWorkerSection;
