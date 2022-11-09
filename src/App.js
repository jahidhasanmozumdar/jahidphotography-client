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
import LogIn from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";
import RequireAuth from "./components/Shared/RequireAuth";
import ReviewPage from "./components/MyReview/ReviewPage";
import Blog from "./components/Blog/Blog";

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
        <Route
          path="/addnewservice"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myreview" element={<ReviewPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
