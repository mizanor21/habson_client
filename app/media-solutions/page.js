import MediaSolutions from "@/components/Solutions/MediaSolutions";
import React from "react";

const MediaSolutionss = async () => {
  // Fetching data from the API
  const res = await fetch(
    "https://admin.habson.org/api/media-solutions",
    {
      next: { revalidate: 10 },
    }
  );
  const [mediaSolutionsData] = await res.json();

  // Destructuring the data
  const { shortDescription, items, brand } = mediaSolutionsData;
  return (
    <div>
      <MediaSolutions
        shortDescription={shortDescription}
        items={items}
        brands={brand}
      />
    </div>
  );
};

export default MediaSolutionss;
