import PartnerSection from "@/components/Partnership/PartnerSection";
import React from "react";

const Partnership = async () => {
  const res = await fetch("https://habson-admin.vercel.app/api/partnership", {
    next: { revalidate: 10 },
  });

  const partnershipData = await res.json();

  return (
    <div>
      <PartnerSection partnersData={partnershipData} />{" "}
    </div>
  );
};

export default Partnership;
