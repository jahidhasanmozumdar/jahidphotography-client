import React from "react";
import face from "../../asset/3106921.png";

const DisplayReview = ({ review }) => {
  const { description, user, userPhoto, rating } = review;

  let reviews = [];
  for (let i = 0; i < rating; i++) {
    reviews[i] = i;
  }

  return (
    <div className="card w-96">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
            <img src={userPhoto || face} alt="" />
          </div>
        </div>
      </figure>
      <div className="card-body items-center mt-[-20px] text-center">
        <h2 className="card-title text-white">{user}</h2>
        <p className="text-white">{description}</p>
        <div>
          {reviews.map((r) => (
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayReview;
