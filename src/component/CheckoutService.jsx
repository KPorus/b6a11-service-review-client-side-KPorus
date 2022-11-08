import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";

const CheckoutService = () => {
    const { user } = useContext(AuthContext);
  let services = useLoaderData();
  console.log(services);
  let { title, price, review ,_id} = services;

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.Fullname.value}`;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      message,
    };

    // send data to database
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Order placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className='container mx-auto my-16'>
      <div className='flex flex-col w-full p-12 space-y-4 text-center dark:bg-[#9c8476fb] dark:text-slate-300'>
        <h1 className='text-3xl font-semibold'>Add the service: {title}</h1>
        <h1 className='text-3xl font-semibold'>Price:${price}</h1>
        <form
          novalidate=''
          className='space-y-4 ng-untouched ng-pristine ng-valid'
          onSubmit={handlePlaceOrder}>
          <div className='flex flex-col'>
            <input
              name='Fullname'
              type='text'
              placeholder='Full Name'
              className='p-8 rounded-t-md dark:border-gray-600 dark:bg-slate-100 dark:text-gray-900 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2'
            />
            <input
              name='email'
              type='text'
              placeholder='email'
              defaultValue={user?.email}
              readOnly
              className='p-8 mt-1 rounded-b-md dark:border-gray-600 dark:bg-slate-100 dark:text-gray-900 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2'
            />
          </div>
          <div>
            <textarea
              name='message'
              type='text'
              placeholder='Message...'
              className=' p-8 block w-full rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 dark:border-gray-600 dark:bg-slate-100 dark:text-gray-900 focus:ring-violet-400 '></textarea>
          </div>
          <button
            type='submit'
            className='px-8 py-3 space-x-2 font-semibold rounded dark:bg-[#6d5a50fb] dark:text-slate-100 mr-2'>
            Submit
          </button>
          <Link to={`/orders`}>
            <button
              type='button'
              className='px-8 py-3 space-x-2 font-semibold rounded dark:bg-[#6d5a50fb] dark:text-slate-100'>
              Check Your service
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CheckoutService;
