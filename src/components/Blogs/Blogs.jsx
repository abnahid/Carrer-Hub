import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const Blogs = () => {
  const data = useLoaderData();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  return (
    <section className="py-12 bg-white">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Discover New Adventures
        </h1>
        <p className="text-gray-500 font-medium mb-8">
          Explore, discover, and find inspiration through these exciting
          journeys.
        </p>
      </div>

      <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div className="relative" key={blog.id}>
              <Link
                to={`/blog/${blog.id}`}
                className="block overflow-hidden group rounded-xl shadow-lg"
              >
                <img
                  src={blog.image}
                  loading="lazy"
                  className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                  alt="Ocean"
                />
              </Link>
              <div className="relative mt-5">
                <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                  {blog.date || "No Date Provided"}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="block mb-3 hover:underline"
                >
                  <h2 className="text-2xl font-bold text-black  transition-colors duration-200 hover:text-purple-700 0">
                    {blog.title}
                  </h2>
                </Link>
                <p className="mb-4 text-gray-700 ">{blog.content}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="font-medium underline text-purple-600 "
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
