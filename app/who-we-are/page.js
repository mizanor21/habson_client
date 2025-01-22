import React from "react";
import Who_We_Are from "@/components/About/Who_We_Are/Who_We_Are";

const WhoWeAre = async () => {
  // Fetching data from the API
  const res = await fetch("https://habson-admin.vercel.app/api/who-we-are", {
    next: { revalidate: 10 },
  });
  const whoWeAreData = await res.json();

  return (
    <div>
      <Who_We_Are whoWeAreData={whoWeAreData} />
    </div>
  );
};

export default WhoWeAre;
