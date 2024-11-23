import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../../index.css";
import Job from "../Job/Job";
const FeaturedJobs = () => {
  const data = useLoaderData();
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    setJobs(data);
  }, [data]);

  return (
    <div className="py-12 bg-white">
      {/* Heading */}
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-5xl font-extrabold text-gray-900">Featured Jobs</h2>
        <p className="text-gray-500 font-medium mb-8">
          Explore thousands of job opportunities with all the information you
          need. It’s your future.
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      {/* See All Jobs Button */}
      <div
        className={
          dataLength === jobs.length ? "hidden" : "mt-8 flex justify-center"
        }
      >
        <button
          className="btn custom-gradient-btn animate-gradient text-white"
          onClick={() => setDataLength(jobs.length)}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
