import { useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";
import "../index.css";

const Jobs = () => {
  const data = useLoaderData();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, [data]);

  return (
    <div className="py-12 bg-white">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-5xl font-extrabold text-gray-900">Featured Jobs</h2>
        <p className="text-gray-500 font-medium mb-8">
          Explore thousands of job opportunities with all the information you
          need. It’s your future.
        </p>
      </div>

      <div className="flex flex-col justify-center max-w-6xl mx-auto px-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-center space-x-8 p-7 border rounded-lg border-gray-200"
          >
            <div className="flex items-center space-x-8">
              {/* Company Logo Section */}
              <div className="px-12 py-24 bg-gray-100 rounded-lg ">
                <div className="h-auto w-36">
                  <img
                    src={job.logo}
                    alt={`${job.company_name} logo`}
                    className="h-14 object-contain"
                  />
                </div>
              </div>
              {/* Job Details Section */}
              <div className="flex flex-col space-y-5">
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {job.job_title}
                  </h3>
                  <p className="text-xl font-semibold text-gray-500">
                    {job.company_name}
                  </p>
                </div>
                <div className="flex space-x-2 my-2">
                  <button className="px-5 py-2 border border-indigo-400 rounded bg-clip-text text-transparent custom-gradient-btn">
                    {job.remote_or_onsite}
                  </button>
                  <button className="px-5 py-2 border border-indigo-400 rounded bg-clip-text text-transparent custom-gradient-btn">
                    {job.job_type}
                  </button>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1">
                    <CiLocationOn className="text-gray-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AiOutlineDollar className="text-gray-500" />
                    <span>Salary: {job.salary}</span>
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/job/${job.id}`}>
              <button className="mt-6 btn custom-gradient-btn text-white">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
