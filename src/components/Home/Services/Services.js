import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Services = ({ service, loading }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000000] px-12 pt-12">
      {loading ? (
        <p className="text-center text-white">loading....</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {service?.reverse().map((s) => (
            <div className="card rounded-none w-full ">
              <figure className="photo">
                <img className="img-fluid " src={s?.photo} alt="Shoes" />
              </figure>
              <div className="text-start p-2 cardStyle">
                <h2 className="text-2xl text-white">{s?.name}</h2>
                <p className="text-[#b1afaf] mt-4">
                  {s?.description?.slice(0, 100) + "..."}
                </p>
                <div className="card-actions justify-center">
                  <button
                    onClick={() => {
                      navigate(`/photography/${s?._id}`);
                    }}
                    className="border border-gray-700 px-8 py-1 rounded-full text-white mt-4"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
