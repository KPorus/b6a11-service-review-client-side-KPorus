import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Loading from "./Loading";
import UserReview from "./UserReview";

const UserReviews = () => {
  
  const {
    isLoading,
    refetch,
    data: review = [],
  } = useQuery({
    queryKey: ["userPuduct"],
    queryFn: async () => {
      const res = await fetch(
        `https://b6a11-service-review-server-side-kp-orus-steel.vercel.app/userReviews`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if(review.length === 0)
  {
    return toast.error("Here is no review")
  }
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this review"
    );
    if (proceed) {
      fetch(` https://b6a11-service-review-server-side-kp-orus-steel.vercel.app/userReviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("photo-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch()
            toast.success("deleted successfully");
          }
        });
    }
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 container mx-auto my-14'>
      {review.map((user) => (
        <UserReview
          key={user._id}
          user={user}
          handleDelete={handleDelete}></UserReview>
      ))}
    </div>
  );
};

export default UserReviews;
