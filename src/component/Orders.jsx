import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { setLoading, usersignOut, user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch(` https://b611-service-review-server.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("photo-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return usersignOut();
        }
        return res.json();
      })
      .then((data) => {

        setOrders(data);
      });
  }, [user?.email, usersignOut]);

  const handleDelete=(id)=>
  {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
        fetch(`https://b611-service-review-server.vercel.app/orders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('photo-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
    }
  }

  console.log(orders);
  return (
    <div className="container mx-auto py-14">
      <h2 className='text-5xl'>You have add {orders.length} service</h2>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Delete service</th>
              <th>Name</th>
              <th>Job</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
