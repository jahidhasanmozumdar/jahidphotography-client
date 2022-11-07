import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsService = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  console.log(details);
  useEffect(() => {
    fetch(`https://jahidphotography-api.onrender.com/photography/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div className="bg-[#000000]">
      <div className="card w-full bg-[#000000] shadow-xl">
        <figure>
          <img src={details.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-white">{details.name}</h2>
          <p className="text-[#b1afaf] mt-4">{details.description}</p>
          <p className="text-[#b1afaf] mt-4">Rating: {details.rating} star</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
