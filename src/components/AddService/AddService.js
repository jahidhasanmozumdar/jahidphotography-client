import React, { useEffect, useState } from "react";

const AddService = () => {
  const [getData, setGetData] = useState();
  const handleChange = (e) => {
    setGetData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jahidphotography-api.onrender.com/photography", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="px-12 mx-auto bg-[#000000] pt-12 h-screen">
      <div className="w-2/4 mx-auto border p-2">
        <h2 className="text-center text-white text-2xl">Add New Service</h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="service name"
            className="input input-bordered w-full mt-2"
          />
          <input
            onChange={handleChange}
            type="text"
            name="price"
            placeholder="price"
            className="input input-bordered w-full mt-2"
          />
          <input
            onChange={handleChange}
            type="text"
            name="photo"
            placeholder="photo url"
            className="input input-bordered w-full mt-2"
          />
          <input
            onChange={handleChange}
            type="text"
            name="rating"
            placeholder="rating"
            className="input input-bordered w-full mt-2"
          />

          <textarea
            onChange={handleChange}
            name="description"
            className="textarea textarea-bordered w-full mt-2"
            placeholder="description"
          ></textarea>
          <button
            type="submit"
            className="text-white px-8 py-1 border rounded-lg flex justify-center mx-auto"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
