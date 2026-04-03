import "../Home/Home.css";
import "../Home/Features.css";
import "../../components/cartPage/cart.css";
import HomeContent from "./Components/HomeContent";
import NewFeatures from "./NewFeatures";
import Categories from "./Categories";
import HomeFooter from "./HomeFooter";
import History from "./History";
import { useEffect } from "react";
import { BeatLoader } from "react-spinners";

const Home = ({ setSelectCategory, selectCategory, loading, setLoading }) => {
  useEffect(() => {
    setLoading(true);
    setTimeout(
      () => {
        setLoading(false);
      },
      Math.random() * 1000 + 500,
    ); // Simulate loading time between 0.5s and 1.5s
  }, []);
  return (
    <>
      {loading ? (
        <BeatLoader color="#336b54" className="loading" />
      ) : (
        <>
          <div className="landing">
            <div className="landingOne">
              <div className="container">
                <HomeContent />
              </div>
            </div>
            <NewFeatures />
            <Categories
              setSelectCategory={setSelectCategory}
              selectCategory={selectCategory}
            />
          </div>
          <History />
          <HomeFooter />
        </>
      )}
    </>
  );
};

export default Home;
