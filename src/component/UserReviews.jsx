import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";
import Loading from "./Loading";
import UserReview from "./UserReview";

const UserReviews = () => {
  const {user} = useContext(AuthContext);
  const {
    isLoading,
    refetch,
    data: review = [],
  } = useQuery({
    queryKey: ["userPuduct"],
    queryFn: async () => {
      const res = await fetch(
        `https://b6a11-service-review-server-side-kp-orus-eight.vercel.app/userReviews`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(review)
  let userReview = review.filter(review => review.email === user?.email)
  console.log("userReview",userReview)
  if(review.length === 0)
  {
    return toast.error("Here is no review")
  }
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this review"
    );
    if (proceed) {
      fetch(`https://b6a11-service-review-server-side-kp-orus-eight.vercel.app/userReviews/${id}`, {
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
      {userReview.map((userReview) => (
        <UserReview
          key={userReview._id}
          userReview={userReview}
          handleDelete={handleDelete}></UserReview>
      ))}
    </div>
  );
};

export default UserReviews;
