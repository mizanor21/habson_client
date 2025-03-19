import TheEdgeLayout from "@/components/Resources/TheEdgeLayout";
import React from "react";

const TheEdge = async () => {
  // Fetching data from the API
  const res = await fetch("https://admin.habson.org/api/edge", {
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
