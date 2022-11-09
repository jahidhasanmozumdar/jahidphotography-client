import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import DisplayReview from "./DisplayReview";

const ReviewPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://jahidphotography-api.onrender.com/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user]);
  if (loading) {
    return <p>hsdaf</p>;
  }
  console.log("dth", reviews);
  return (
    <div className="pt-12 bg-slate-300">
      <h3 className="text-center font-bold text-white text-2xl pt-3">
        TESTIMONIALS{" "}
      </h3>
      <h2 className="text-center text-white text-4xl">
        Our Customers Are Saying?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews?.slice(0, 6).map((review) => (
          <DisplayReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
