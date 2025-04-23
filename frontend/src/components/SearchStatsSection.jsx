import React from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion"; // ✅ เพิ่ม animation ด้วย framer-motion

const SearchStatsSection = () => {
  const dailyStats = [
    { label: "ค้นพบวันนี้", value: 196 },
    { label: "ค้นไม่พบวันนี้", value: 6381 },
    { label: "ค้นหารวมวันนี้", value: 6577 },
    { label: "ค้นหาทั้งหมด", value: 362578 },
    { label: "ค้นพบรวมทั้งหมด", value: 19005 },
    { label: "ค้นไม่พบรวมทั้งหมด", value: 343573 }
  ];

  const lineData = [
    { x: 1, y: 400 },
    { x: 2, y: 300 },
    { x: 3, y: 500 },
    { x: 4, y: 200 },
    { x: 5, y: 600 },
    { x: 6, y: 350 },
    { x: 7, y: 500 }
  ];

  return (
    <section className="bg-white py-10 text-gray-800 font-prompt">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dailyStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-green-100 via-green-50 to-white border border-green-200 rounded-2xl p-6 shadow-md relative overflow-hidden"
          >
            <h3 className="text-sm text-green-600 mb-1 font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-emerald-700">{stat.value.toLocaleString()}</p>
            <p className="text-xs text-gray-500">ครั้ง</p>
            <div className="absolute bottom-0 left-0 w-full h-14 opacity-30 pointer-events-none">
              <ResponsiveContainer width="100%" height="100%">
                {index < 3 ? (
                  <AreaChart data={lineData}>
                    <Area
                      type="monotone"
                      dataKey="y"
                      stroke="#34d399"
                      fill="#6ee7b7"
                      strokeWidth={2}
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                ) : (
                  <BarChart data={lineData}>
                    <Bar dataKey="y" fill="#6ee7b7" radius={[4, 4, 0, 0]} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SearchStatsSection;
