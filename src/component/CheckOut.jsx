import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  let services = useLoaderData();
  console.log(services);
  let { title, price, review } = services;
  return (
    <div className='container mx-auto my-16'>
      <div className='flex flex-col w-full p-12 space-y-4 text-center dark:bg-[#9c8476fb] dark:text-slate-300'>
        <h1 className='text-3xl font-semibold'>Add the service: {title}</h1>
        <h1 className='text-3xl font-semibold'>Price:${price}</h1>
        <form
          novalidate=''
          className='space-y-4 ng-untouched ng-pristine ng-valid'>
          <div className='flex flex-col'>
            <label for='email' className='sr-only'>
              Email address
            </label>
            <input
              id='email'
              type='text'
              placeholder='Full Name'
              className='p-8 rounded-t-md dark:border-gray-600 dark:bg-slate-100 dark:text-gray-900 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2'
            />
            <label for='password' className='sr-only'>
              Password
            </label>
            <input
              id='password'
              type='text'
              placeholder='email'
              defaultValue={user?.email}
              className='p-8 mt-1 rounded-b-md dark:border-gray-600 dark:bg-slate-100 dark:text-gray-900 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2'
            />
          </div>
          <div>
            <textarea
              id='message'
              type='text'
              placeholder='Message...'
              className=' p-8 block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 dark:border-gray-600 dark:bg-slate-100 dark:text-gray-900 focus:ring-violet-400 '></textarea>
          </div>
          <button
            type='button'
            className='px-8 py-3 space-x-2 font-semibold rounded dark:bg-[#6d5a50fb] dark:text-slate-100 mr-2'>
            Submit
          </button>
          <button
            type='button'
            className='px-8 py-3 space-x-2 font-semibold rounded dark:bg-[#6d5a50fb] dark:text-slate-100'>
            Check Your service
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
