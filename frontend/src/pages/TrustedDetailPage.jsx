import React from "react";
import { useParams, Link } from "react-router-dom";

const workerData = {
  T001: {
    name: "ช่างป๊อป งานละเอียด",
    stars: 5,
    reviews: 48,
    service: "ติดตั้งไฟฟ้า",
    platform: "Facebook: รีวิวช่างดีจริง",
    description:
      "ให้บริการติดตั้งระบบไฟฟ้าในบ้าน คอนโด โรงงาน รับประกันงานเรียบร้อยตามมาตรฐาน และเป็นมิตรกับลูกค้า",
    date: "22-04-2025"
  },
  T002: {
    name: "คุณพงษ์ บริการรวดเร็ว",
    stars: 5,
    reviews: 36,
    service: "ปูกระเบื้อง",
    platform: "Line: @trustedworker",
    description:
      "บริการปูกระเบื้องทุกประเภท ราคามิตรภาพ งานเนี๊ยบ รวดเร็ว ตรงเวลา พร้อมคำแนะนำที่เป็นประโยชน์",
    date: "21-04-2025"
  },
  // ... เพิ่มข้อมูลอื่น ๆ ถ้าต้องการ
};

export default function TrustedDetailPage() {
  const { id } = useParams();
  const worker = workerData[id];

  if (!worker) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center font-prompt">
        <h2 className="text-2xl font-bold text-red-600">ไม่พบข้อมูลช่าง</h2>
        <Link
          to="/"
          className="mt-4 text-blue-600 hover:underline"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto p-6 font-prompt">
      <h1 className="text-2xl font-bold text-emerald-700 mb-2">
        {worker.name}
      </h1>
      <p className="text-sm text-gray-600 mb-1">บริการ: {worker.service}</p>
      <p className="text-sm text-gray-600 mb-1">จำนวนรีวิว: {worker.reviews} รีวิว (⭐ {worker.stars})</p>
      <p className="text-sm text-gray-600 mb-1">แพลตฟอร์ม: {worker.platform}</p>
      <p className="text-sm text-gray-600 mb-3">รีวิวล่าสุด: {worker.date}</p>
      <div className="bg-green-50 p-4 border border-emerald-200 rounded-lg">
        <p className="text-gray-700 leading-relaxed text-sm">
          {worker.description}
        </p>
      </div>

      <Link
        to="/"
        className="mt-6 inline-block text-blue-600 hover:underline"
      >
        ← กลับหน้าหลัก
      </Link>
    </section>
  );
}
