import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddService from "./components/AddService/AddService";

import DetailsService from "./components/DetailsService/DetailsService";
import Home from "./components/Home/Home";
import Services from "./components/Home/Services/Services";

import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jahidphotography-api.onrender.com/allphotography")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 1) {
          setLoading(true);
          setService(data);
        }
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <Navbar />
      {/* <Home /> */}

      <Routes>
        <Route
          path="/"
          element={<Home service={service?.slice(0, 3)} loading={loading} />}
        />
        <Route path="/photography/:id" element={<DetailsService />} />
        <Route
          path="/allservice"
          element={<Services service={service} loading={loading} />}
        />
        <Route path="/addnewservice" element={<AddService />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
