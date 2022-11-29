import { Rating } from "@mui/material";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";

const ReviewModal = ({refetch,title}) => {
    const [rate, setrate] = useState(2);
  const { user } = useContext(AuthContext);

  const handleStatusUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const img = user?.photoURL || "MX";
    const details = form.details.value;
    const email = user?.email || "unregistered";
    let ServiceName = form.serviceName.value;

    console.log(ServiceName);
    const userReview = 
      { name:name,
        details:details,
        email:email,
        rating:rate,
        img:img,
        ServiceName
      }
    

   if(user?.email)
   {
    fetch(` http://localhost:5000/userReviews`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem("photo-token")}`,
      },
      body: JSON.stringify(userReview)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Review add")
            refetch()
          }form.reset();
      })
      .catch((er) => console.error(er));
   }
};
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type='checkbox' id='reviewPost' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='reviewPost'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <form onSubmit={handleStatusUpdate}>
          <input
            name='Fullname'
            type='text'
            defaultValue={user?.displayName}
            className='p-8 mr-2 rounded-t-md border-gray-600 bg-slate-100 text-gray-900 focus:ring-violet-400 focus:border-violet-400 focus:ring-2'
          />
          <input
            name='serviceName'
            type='text'
            defaultValue={title}
            className='p-8 mr-2 rounded-t-md border-gray-600 bg-slate-100 text-gray-900 focus:ring-violet-400 focus:border-violet-400 focus:ring-2'
          />
          <input
            name='email'
            type='email'
            defaultValue={user?.email}
            readOnly
            className='p-8 mt-1 mr-2 rounded-b-md border-gray-600 bg-slate-100 text-gray-900 focus:ring-violet-400 focus:border-violet-400 focus:ring-2'
          />
          <input
            name='details'
            type='text'
            placeholder='Add review'
            className='p-8 mt-1 mr-2 rounded-b-md border-gray-600 bg-slate-100 text-gray-900 focus:ring-violet-400 focus:border-violet-400 focus:ring-2'
          />
          <Rating
            name='simple-controlled'
            value={rate}
            onChange={(event, newValue) => {
              setrate(newValue);
            }}
          />
          
            <button
              type='submit'
              className='px-8 py-3 space-x-2 font-semibold rounded bg-[#6d5a50fb] text-slate-100'>
              Submit
            </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
