import heroImg from "../assets/images/user.png";
import "../index.css";
const Banner = () => {
  return (
    <div className="bg-[#eef2ff] pt-14">
      <div className="max-w-6xl mx-auto px-6 ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 ">
            <h2 className="text-7xl font-extrabold text-gray-800">
              One Step Closer To Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] animate-gradient">
                Dream Job
              </span>
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-500 ">
              Explore thousands of job opportunities with all the information
              you need for your future. Come find it. Manage all your job
              applications from start to finish.
            </p>
            <button className="btn custom-gradient-btn animate-gradient mt-6 font-extrabold text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={heroImg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
