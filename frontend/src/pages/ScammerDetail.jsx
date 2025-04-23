// src/pages/ScammerDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";

const mockData = {
  S001: {
    name: "ช่างวิทยา สายตรง",
    service: "ติดตั้งแอร์",
    platform: "Facebook: ช่างดีจริงหรือหลอก",
    amount: 3200,
    count: 2,
    date: "22-04-2025",
    description: "ลูกค้าโอนเงินแล้วหาย ติดต่อไม่ได้ ใช้รูปผลงานคนอื่นโฆษณา"
  },
  S002: {
    name: "สมชาย ทุบตึก",
    service: "รื้อถอนบ้าน",
    platform: "Line: @contractorwarn",
    amount: 8900,
    count: 5,
    date: "20-04-2025",
    description: "มัดจำแล้วไม่มา แจ้งล่วงหน้า 2 ครั้งแล้วก็ไม่มาตามนัด"
  }
  // เพิ่ม mock อื่น ๆ ได้
};

export default function ScammerDetail() {
  const { ref } = useParams();
  const scammer = mockData[ref];

  if (!scammer) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center font-prompt">
        <div>
          <FiAlertCircle className="text-4xl text-red-500 mx-auto" />
          <h2 className="text-xl mt-4 font-semibold text-gray-700">ไม่พบข้อมูลช่างที่คุณต้องการดู</h2>
          <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
            กลับหน้าหลัก
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white py-12 px-4 font-prompt">
      <div className="max-w-3xl mx-auto bg-green-50 p-6 rounded-xl shadow-md">
        <Link to="/" className="text-sm text-emerald-600 flex items-center mb-4 hover:underline">
          <FiArrowLeft className="mr-2" />
          กลับหน้าหลัก
        </Link>

        <h2 className="text-2xl font-bold text-emerald-700 mb-4">รายละเอียดช่างโกง</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p><span className="font-semibold text-emerald-600">ชื่อช่าง:</span> {scammer.name}</p>
          <p><span className="font-semibold">บริการ:</span> {scammer.service}</p>
          <p><span className="font-semibold">แพลตฟอร์ม:</span> {scammer.platform}</p>
          <p><span className="font-semibold">จำนวนที่ถูกรายงาน:</span> {scammer.count} ครั้ง</p>
          <p><span className="font-semibold">มูลค่าความเสียหายรวม:</span> {scammer.amount.toLocaleString()} บาท</p>
          <p><span className="font-semibold">วันแจ้งล่าสุด:</span> {scammer.date}</p>
          <p><span className="font-semibold">รายละเอียดเพิ่มเติม:</span> {scammer.description}</p>
        </div>
      </div>
    </section>
  );
}
