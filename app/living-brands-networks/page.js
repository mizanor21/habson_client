import LivingBrandsNetworks from "@/components/About/LivingBrandsNetworks";
import React from "react";

const page = async () => {
  // Fetching data from the API
  const res = await fetch(
    "https://living-brands-admin.vercel.app/api/brand-solutions",
    {
      next: { revalidate: 10 },
    }
  );
  const [brandSolutionsData] = await res.json(); // Destructure the first object if data is an array

  // Destructuring the data
  const { shortDescription, items, brand } = brandSolutionsData;

  return (
    <>
      <LivingBrandsNetworks
        shortDescription={shortDescription}
        items={items}
        brand={brand}
      />
    </>
  );
};

export default page;
