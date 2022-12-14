import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const DetailsService = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [ratings, setRatings] = useState();
  const [userRatings, setUserRatings] = useState();

  useEffect(() => {
    fetch(`https://jahidphotography-api.onrender.com/photography/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  useEffect(() => {
    fetch(`https://jahidphotography-api.onrender.com/review`)
      .then((res) => res.json())
      .then((data) => setUserRatings(data));
  }, [ratings]);

  let reviews = [];
  for (let i = 0; i < details?.rating; i++) {
    reviews[i] = i;
  }

  const handleChange = (e) =>
    setRatings((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      user: user?.displayName,
      email: user?.email,
      userPhoto: user?.photoURL,
    }));

  const handleReview = () => {
    if (user?.email) {
      console.log("jsdg");
      fetch(`https://jahidphotography-api.onrender.com/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ratings),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("successfully your data save", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // e.target.reset();
            setRatings("");
          }
        });
    } else {
      toast.warn("please try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  console.log(userRatings);
  return (
    <div className="bg-[#000000] h-screen max-w-screen-2xl px-12 pt-12">
      <div className="grid grid-cols-4 w-3/4 mx-auto">
        <div className="col-span-3 flex justify-start items-start gap-x-6 bg-white">
          <figure className="">
            <img className="img-fluid " src={details?.photo} alt="Movie" />
          </figure>
          <div className="">
            <h2 className="text-2xl font-semibold mt-4">{details?.name}</h2>
            <div className="rating mt-2">
              {reviews.map((r) => (
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              ))}
            </div>
            <p className="text-xs">{details?.description}</p>
            <p className="text-orange-600 font-semibold mt-2">
              Price : $ {details?.price}
            </p>
            <div className="mt-12">
              {userRatings?.reverse().map((rating) => (
                <>
                  <div className="flex justify-start items-center mt-2">
                    <label tabIndex="0" className=" avatar">
                      <div className="w-6 rounded-full">
                        {user?.photoURL ? (
                          <img src={rating?.userPhoto} alt="" />
                        ) : (
                          <h3 className="text-center text-xs text-secondary bg-gray-400 flex justify-center items-center h-full">
                            {rating?.user?.slice(0, 2)}
                          </h3>
                        )}
                      </div>
                    </label>
                    <p className="text-xs pl-1">by {rating?.user}</p>
                  </div>
                  <div className="rating mt-0">
                    {reviews.map((r) => (
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 w-3 bg-orange-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs">{rating?.description}</p>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-100/90 p-6">
          <h2>Please enter your rating</h2>
          <input
            onChange={handleChange}
            type="number"
            name="rating"
            placeholder="please your rating"
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <textarea
            onChange={handleChange}
            name="description"
            className="textarea textarea-bordered w-full mt-2"
            placeholder="share your experience"
          ></textarea>

          <button
            onClick={() => handleReview()}
            className="flex mt-6 justify-center mx-auto bg-green-600/70 px-6 py-1"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
