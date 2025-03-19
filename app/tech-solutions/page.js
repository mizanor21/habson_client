import TechSolutions from "@/components/Solutions/TechSolutions";
import React from "react";

const TechSolutionss = async () => {
  // Fetching data from the API
  const res = await fetch(
    "https://admin.habson.org/api/tech-solutions",
    {
      next: { revalidate: 10 },
    }
  );
  const [techSolutionsData] = await res.json();

  // Destructuring the data
  const { shortDescription, items, brand } = techSolutionsData;

  // Render the component with the fetched data
  return (
    <div>
      <TechSolutions
        shortDescription={shortDescription}
        items={items}
        brands={brand}
      />
    </div>
  );
};

export default TechSolutionss;
