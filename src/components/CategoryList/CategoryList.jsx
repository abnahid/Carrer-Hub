import { useEffect, useState } from "react";
import "../../index.css";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="my-12 ">
      <div className="space-y-4">
        <h2 className="text-5xl font-extrabold text-center">
          Job Category List
        </h2>
        <p className="text-center text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mt-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg 
             bg-[#eef2ff]"
          >
            {/* Icon or Image */}
            <div className="text-5xl text-indigo-400 mb-4">
              <img src={category.logo} alt="" />
            </div>

            {/* Category Title */}
            <h3 className="text-lg font-semibold text-gray-700">
              {category.category_name}
            </h3>

            {/* Jobs Available */}
            <p className="text-gray-400">{category.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
