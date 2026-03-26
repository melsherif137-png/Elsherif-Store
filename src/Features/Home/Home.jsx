import "../Home/Home.css";
import HomeContent from "./Components/HomeContent";
const Home = ({ step }) => {
  return (
    <>
      <div className="landing">
        <div className="container">
          <HomeContent step={step} />
        </div>
      </div>
    </>
  );
};

export default Home;
