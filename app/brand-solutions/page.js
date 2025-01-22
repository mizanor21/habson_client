import BrandSolutions from "@/components/Solutions/BrandSolutions";
import React from "react";

const BrandSolutionss = async () => {
  // Fetching data from the API
  const res = await fetch(
    "https://habson-admin.vercel.app/api/brand-solutions",
    {
      next: { revalidate: 10 },
    }
  );
  const [brandSolutionsData] = await res.json(); // Destructure the first object if data is an array

  // Destructuring the data
  const { shortDescription, items, brand } = brandSolutionsData;

  return (
    <>
      <BrandSolutions
        shortDescription={shortDescription}
        items={items}
        brand={brand}
      />
    </>
  );
};

export default BrandSolutionss;
