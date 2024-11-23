import { FaCookieBite, FaEgg, FaUtensilSpoon } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen bg-[#eef2ff] flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="w-32 h-32 bg-[#9873FF] rounded-full opacity-20 animate-pulse absolute top-10 left-20"></div>
        <div className="w-32 h-32 bg-[#9873FF] rounded-full opacity-20 animate-ping absolute top-20 right-20"></div>
        <div className="w-24 h-24 bg-[#9873FF] rounded-full opacity-20 animate-bounce absolute bottom-10 left-1/3"></div>
      </div>

      {/* Content Card */}
      <div className="relative bg-white shadow-xl rounded-lg p-10 text-center z-10 max-w-lg border border-[#9873FF]">
        <div className="text-6xl text-[#9873FF] flex justify-center space-x-4 mb-6">
          <FaCookieBite />
          <FaUtensilSpoon />
          <FaEgg />
        </div>
        <h1 className="text-3xl font-bold text-[#9873FF] mb-4">
          We&apos;re Still Stirring the Pot!
        </h1>
        <p className="text-gray-600">
          Our delicious content is{" "}
          <span className="text-[#9873FF]">cooking</span> and will be ready
          soon. Stay tuned while we get things just right!
        </p>
        <div className="mt-6">
          <button className="btn btn-outline border-[#9873FF] text-[#9873FF] hover:bg-[#9873FF] hover:text-white transition-all duration-300">
            Notify Me When Ready!
          </button>
        </div>
      </div>

      {/* Cooking Animation */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="flex justify-center space-x-4">
          <img
            src="https://img.icons8.com/?size=100&id=32K68Ui6u85J&format=png&color=9873ff"
            alt="Cooking Pan"
            className="w-16 h-16 animate-spin-slow"
          />
          <img
            src="https://img.icons8.com/?size=100&id=PjccLtGlclkT&format=png&color=9873ff"
            alt="Flame"
            className="w-16 h-16 animate-bounce"
          />
          <img
            src="https://img.icons8.com/?size=100&id=g3VPeHvpP2T3&format=png&color=9873ff"
            alt="Bowl"
            className="w-16 h-16 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
