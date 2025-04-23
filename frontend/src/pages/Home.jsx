import React from "react";
import CheckSection from "../components/CheckSection";
import SearchStatsSection from "../components/SearchStatsSection";
import { ScammerReportSection } from "../components/ScammerReportSection";
import TrustedWorkerSection from "../components/TrustedWorkerSection";

export default function Home() {
  return (
    <div className="font-prompt space-y-6">
      <CheckSection />
      <SearchStatsSection />
      <ScammerReportSection />
      <TrustedWorkerSection />
    </div>
  );
}
