"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const JobApplicationForm = () => {
  // Validation Schema using Yup
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Full name is required")
      .min(3, "At least 3 characters"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    resume: yup
      .mixed()
      .required("Resume is required")
      .test(
        "fileSize",
        "File size too large (max: 2MB)",
        (file) => !file || file.size <= 2000000
      )
      .test(
        "fileType",
        "Unsupported file format (PDF only)",
        (file) => !file || ["application/pdf"].includes(file.type)
      ),
    coverLetter: yup
      .string()
      .required("Cover letter is required")
      .min(50, "Minimum 50 characters"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log("Form Data:", data);
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="lg:container lg:mx-auto 2xl:max-w-[800px] py-10 lg:py-20 px-6">
      <h2 className="text-2xl font-semibold text-[#127acc] mb-6">
        Job Application Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            {...register("name")}
            className={`border w-full px-4 py-2 rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
          />
          <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`border w-full px-4 py-2 rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            {...register("phone")}
            className={`border w-full px-4 py-2 rounded ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your phone number"
          />
          <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Resume (PDF only)
          </label>
          <input
            type="file"
            {...register("resume")}
            className={`block w-full text-gray-700 ${
              errors.resume ? "border-red-500" : "border-gray-300"
            }`}
            accept=".pdf"
          />
          <p className="text-red-500 text-sm mt-1">{errors.resume?.message}</p>
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Cover Letter
          </label>
          <textarea
            {...register("coverLetter")}
            className={`border w-full px-4 py-2 rounded h-28 ${
              errors.coverLetter ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Write your cover letter"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.coverLetter?.message}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#127acc] text-white py-3 rounded hover:bg-[#0d4849] transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
