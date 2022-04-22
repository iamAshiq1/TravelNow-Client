/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Fade from "react-reveal/Fade";

const Order = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://safe-stream-68463.herokuapp.com/Order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const orders = order.filter((or) => or.email === user.email);

  // DELETE AN USER
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://safe-stream-68463.herokuapp.com/Order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = order.filter((user) => user._id !== id);
            setOrder(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="text-center my-5">
      <h2 className="mt-5 pt-3 fw-bolder text-success">
        My Booking Informations
      </h2>

      <hr className="mb-5" />

      <div className="row mx-5 gap-5 justify-content-center">
        {orders.map((ord) => (
          <Fade>
          <div style={{
            backgroundImage:
              `linear-gradient(rgba(5, 10, 30, 0.8), rgba(5, 10, 30, 0.8)), url(${ord.img})`,
            backgroundRepeat: "no-repeat",
            height: "30vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "3px 3px 15px gray", borderRadius: "10px"
          }}
            className="col-lg-3 py-2">
            <h6 style={{color: "darkcyan"}} className="mt-5">
              <i class="far fa-user"></i> {ord?.name}
            </h6>
            <h6 className="text-success">
              <i class="fas fa-map-marker-alt"></i> {ord?.place}
            </h6>
            <button
              className="btn btn-outline-danger py-0 mt-3"
              onClick={() => handleDeleteUser(ord._id)}
            >
              X
            </button>
          </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Order;
