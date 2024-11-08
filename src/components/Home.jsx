import Banner from "./Banner";
import CategoryList from "./CategoryList/CategoryList";
import FeaturedJobs from "./CategoryList/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
