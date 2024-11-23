import { AiOutlineDollar } from "react-icons/ai";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import "../../index.css";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const {
    salary,
    company_name,
    job_title,
    experiences,
    job_description,
    job_responsibility,
    contact_information = [],
    educational_requirements,
  } = job;

  return (
    <div>
      <h2 className="text-3xl text-center font-extrabold text-gray-900 bg-[#eef2ff] pb-10 pt-4">
        {company_name}
      </h2>
      <div className="flex flex-col lg:flex-row bg-white py-12 px-4 sm:px-8 max-w-6xl mx-auto">
        {/* Left Column - Job Description */}
        <div className="flex-1 text-left mb-8 lg:mb-0 lg:mr-8">
          <h3 className="text-lg font-bold mb-2">Job Description:</h3>
          <p className="text-gray-600 mb-4">{job_description}</p>

          <h3 className="text-lg font-bold mb-2">Job Responsibility:</h3>
          <p className="text-gray-600 mb-4">{job_responsibility}</p>

          <h3 className="text-lg font-bold mb-2">Educational Requirements:</h3>
          <p className="text-gray-600 mb-4">{educational_requirements}</p>

          <h3 className="text-lg font-bold mb-2">Experiences:</h3>
          <p className="text-gray-600">{experiences}</p>
        </div>

        {/* Right Column - Job Details */}
        <div className="w-full lg:w-1/3">
          <div className="bg-[#eef2ff] rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Job Details</h3>
            <div className="border-t border-indigo-200 pt-4 mb-4">
              <p className="flex items-center text-gray-600 mb-2">
                <span className="font-bold mr-2 flex items-center gap-2">
                  <AiOutlineDollar className="text-indigo-400" /> Salary:
                </span>
                {salary} (Per Month)
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-bold mr-2 flex items-center gap-2">
                  <BsCalendar4Week className="text-indigo-400" /> Job Title:
                </span>
                {job_title}
              </p>
            </div>

            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <div className="border-t border-indigo-200 pt-4">
              <p className="flex items-center text-gray-600 mb-2">
                <span className="font-bold mr-2 flex items-center gap-2">
                  <IoCallOutline className="text-indigo-400" /> Phone:
                </span>
                {contact_information.phone}
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="font-bold mr-2 flex items-center gap-2">
                  <HiOutlineMail className="text-indigo-400" /> Email:
                </span>
                {contact_information.email}
              </p>
              <p className="flex items-start text-gray-600">
                <span className="font-bold mr-2 flex items-center gap-2">
                  <IoLocationOutline className="text-indigo-400" /> Address:
                </span>
                {contact_information.address}
              </p>
            </div>
          </div>
          <button className="btn w-full text-white custom-gradient-btn gradient-animation mt-4">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
