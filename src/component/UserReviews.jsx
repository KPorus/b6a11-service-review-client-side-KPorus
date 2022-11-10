import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import UserReview from "./UserReview";

const UserReviews = () => {
  let userReviews = useLoaderData();
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this review"
    );
    if (proceed) {
      fetch(`http://localhost:5000/userReviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("photo-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
          }
        });
    }
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 container mx-auto my-14'>
      {userReviews.map((user) => (
        <UserReview
          key={user._id}
          user={user}
          handleDelete={handleDelete}></UserReview>
      ))}
    </div>
  );
};

export default UserReviews;
