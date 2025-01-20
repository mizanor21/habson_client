import TheEdgeLayout from "@/components/Resources/TheEdgeLayout";
import React from "react";

const TheEdge = async () => {
  // Fetching data from the API
  const res = await fetch("https://living-brands-admin.vercel.app/api/edge", {
    next: { revalidate: 10 },
  });
  const theEdgeData = await res.json();

  return (
    <div>
      <TheEdgeLayout data={theEdgeData} />
    </div>
  );
};

export default TheEdge;
