import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const jobsData = [
  {
    id: 1,
    job_title: "Technical Database Engineer",
    company_name: "Google LLC",
    remote_or_onsite: "Remote",
    location: "Dhaka, Bangladesh",
    job_type: "Full Time",
  },
  {
    id: 2,
    job_title: "Senior Product Designer",
    company_name: "Netflix",
    remote_or_onsite: "Onsite",
    location: "Dhaka, Bangladesh",
    job_type: "Full Time",
  },
  {
    id: 3,
    job_title: "Software Engineer",
    company_name: "Tesla",
    remote_or_onsite: "Onsite",
    location: "Dhaka, Bangladesh",
    job_type: "Full Time",
  },
  {
    id: 4,
    job_title: "Cloud Solutions Architect",
    company_name: "Amazon Web Services",
    remote_or_onsite: "Remote",
    location: "Sylhet, Bangladesh",
    job_type: "Part Time",
  },
  {
    id: 5,
    job_title: "iOS Application Developer",
    company_name: "Apple Inc.",
    remote_or_onsite: "Onsite",
    location: "Dhaka, Bangladesh",
    job_type: "Full Time",
  },
  {
    id: 6,
    job_title: "Backend Developer",
    company_name: "Spotify",
    remote_or_onsite: "Onsite",
    location: "Dhaka, Bangladesh",
    job_type: "Full Time",
  },
  {
    id: 7,
    job_title: "Graphics Designer",
    company_name: "Adobe",
    remote_or_onsite: "Remote",
    location: "Barisal, Bangladesh",
    job_type: "Contract",
  },
  {
    id: 8,
    job_title: "AI Research Scientist",
    company_name: "Microsoft",
    remote_or_onsite: "Remote",
    location: "Chattogram, Bangladesh",
    job_type: "Full Time",
  },
];

// Helper function to count occurrences
const countByField = (field) => {
  return jobsData.reduce((acc, job) => {
    acc[job[field]] = (acc[job[field]] || 0) + 1;
    return acc;
  }, {});
};

const Statistics = () => {
  // Data for charts
  const remoteOrOnsiteData = Object.entries(
    countByField("remote_or_onsite")
  ).map(([key, value]) => ({
    name: key,
    count: value,
  }));

  const locationData = Object.entries(countByField("location")).map(
    ([key, value]) => ({
      name: key,
      count: value,
    })
  );

  const jobTypeData = Object.entries(countByField("job_type")).map(
    ([key, value]) => ({
      name: key,
      count: value,
    })
  );

  return (
    <div>
      <h2 className="text-3xl text-center font-extrabold text-gray-900 bg-[#eef2ff] pb-10 pt-4">
        New Adventures
      </h2>

      <div className="px-5 py-12">
        <h2 className="text-center mb-8 text-2xl font-extrabold text-gray-900">
          Remote vs Onsite
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={remoteOrOnsiteData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <h2 className="text-center my-8 text-2xl font-extrabold text-gray-900">
          Jobs by Location
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={locationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <h2 className="text-center my-8 text-2xl font-extrabold text-gray-900">
          Jobs by Type
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={jobTypeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
