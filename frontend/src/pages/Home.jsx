import React from "react";
import CheckSection from "../components/CheckSection";
import SearchStatsSection from "../components/SearchStatsSection";
import { ScammerReportSection } from "../components/ScammerReportSection";

export default function Home() {
  return (
    <div className="font-prompt space-y-12">
      <CheckSection />
      <SearchStatsSection />
      <ScammerReportSection />
    </div>
  );
}
