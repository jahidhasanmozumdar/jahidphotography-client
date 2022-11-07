import React from "react";
import { useNavigate } from "react-router-dom";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = ({ loading, service }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#000000]">
      <Banner />
      <About />
      <Services loading={loading} service={service} />
      <button
        onClick={() => navigate("/allservice")}
        className="border border-gray-700 px-16 flex justify-center mx-auto py-1 rounded-full text-white mt-4"
      >
        Load more
      </button>
    </div>
  );
};

export default Home;
