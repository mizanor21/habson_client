"use client";
import { useJobsData } from "@/components/Custom/DataFetch";
import Link from "next/link";
import { useState } from "react";
import { BsBriefcase, BsGlobe } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

const JobListings = () => {
  const { data, isLoading, error } = useJobsData();

  const [searchKeywords, setSearchKeywords] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const currentDate = new Date(); // Get the current date

  // Filter data based on search inputs and application deadline
  const filteredData =
    data?.filter(
      (job) =>
        job.title.toLowerCase().includes(searchKeywords.toLowerCase()) &&
        job.location?.city
          .toLowerCase()
          .includes(searchLocation.toLowerCase()) &&
        new Date(job.applicationDetails?.deadline) >= currentDate // Only include jobs with valid deadlines
    ) || [];

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData =
    filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ) || [];

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div
      className="lg:container lg:mx-auto 2xl:max-w-[1200px] py-10 lg:py-20"
      id="job"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[5%]">
        {/* Job Listings */}
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-[#127acc]">Join us</h2>
          <p className="text-gray-500">Current Openings</p>

          {/* Search Section */}
          <div className="flex mt-6 gap-4">
            <input
              type="text"
              placeholder="Job title or skill"
              className="border p-2 w-full"
              value={searchKeywords}
              onChange={(e) => setSearchKeywords(e.target.value)}
            />
            <input
              type="text"
              placeholder="City, state/province"
              className="border p-2 w-full"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>

          {/* Job Cards */}
          <div className="mt-8 space-y-4">
            {isLoading ? (
              <p>Loading jobs...</p>
            ) : error ? (
              <p className="text-red-500">
                Error loading jobs: {error.message}
              </p>
            ) : paginatedData.length > 0 ? (
              paginatedData.map((job) => (
                <div
                  key={job._id}
                  className="border p-4 rounded shadow-sm flex flex-col gap-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <BsBriefcase />
                        Type: {job.location?.type} • Experience:{" "}
                        {job.experienceLevel}
                      </p>
                      <h2 className="text-xl font-semibold mt-1">
                        {job.title}
                      </h2>
                      <p className="text-gray-700 font-medium">
                        {job.salary?.currency} {job.salary?.min}-
                        {job.salary?.max} / {job.salary?.frequency}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <p className="flex items-center gap-2 text-gray-600">
                      <BsGlobe />
                      {job.location?.city}, {job.location?.country}
                    </p>
                    <p className="text-gray-500">{job.department}</p>
                  </div>

                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Company:</strong> {job.company?.name}
                    </p>
                    <p>
                      <strong>Responsibilities:</strong>{" "}
                      {job.responsibilities?.join(", ")}
                    </p>
                    <p>
                      <strong>Benefits:</strong> {job.benefits?.join(", ")}
                    </p>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar />
                    <p className="ml-2">
                      Application Deadline:{" "}
                      {new Date(
                        job.applicationDetails?.deadline
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-blue-200 px-10">
                    <Link href={"/job-apply"} target="_blank">
                      Apply Now
                    </Link>
                  </button>
                </div>
              ))
            ) : (
              <p>No job openings found.</p>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-[#127acc] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
