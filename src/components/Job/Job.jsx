/* eslint-disable react/prop-types */
import { AiOutlineDollar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../../index.css";

const Job = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    salary,
    location,
    job_title,
    job_type,
    remote_or_onsite,
  } = job;
  return (
    <div className="bg-white p-10 border rounded-lg border-gray-200 hover:shadow-lg transition-shadow duration-300 space-y-4 ">
      <div className="h-auto w-36">
        <img src={logo} alt={`${company_name} logo`} className="h-14" />
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-semibold text-gray-700">{job_title}</h3>
        <p className="text-xl font-semibold text-gray-500">{company_name}</p>
      </div>

      <div className="flex space-x-2 my-2">
        <button className="px-5 py-2 border border-indigo-400 rounded bg-clip-text text-transparent custom-gradient-btn">
          {remote_or_onsite}
        </button>

        <button className="px-5 py-2 border border-indigo-400 rounded bg-clip-text text-transparent custom-gradient-btn">
          {job_type}
        </button>
      </div>

      <div className="flex items-center justify-between text-xl font-semibold text-gray-500 mt-4">
        <div className="flex items-center space-x-1">
          <CiLocationOn />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <AiOutlineDollar />
          <span>Salary: {salary}</span>
        </div>
      </div>

      {/* View Details Button */}
      <Link to={`/job/${id}`}>
        <button className="mt-6 btn custom-gradient-btn text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
