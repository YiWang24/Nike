import React from "react";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin tet-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <div
            key={review.customerName}
            className="flex flex-col justify-center items-center"
          >
            <img
              src={review.imgURL}
              alt={review.customerName}
              className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="mt-6 max-w-sm text-center info-text">{review.feedback}</p>
            <div className="mt-3 flex flex-col items-center">
              <h4 className="text-2xl font-palanquin font-bold">{review.customerName}</h4>
              <p className="text-lg text-slate-gray">{review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
