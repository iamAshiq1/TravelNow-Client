import React, {useEffect, useState} from 'react';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://safe-stream-68463.herokuapp.com/Order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

   

/*   // DELETE AN USER
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
            const remainingUsers = orders.filter((order) => order._id === id);
            setOrders(remainingUsers);
          }
        });
    }
  }; */


    return (
        <div className="text-center mb-5">
            <h3 className="mt-5">Total Orders: {orders.length}</h3>
            <hr />
            <ul>
              {orders.map((user) => (
                
                <li className="fw-bold my-4" key={user._id}>
                  Name: <span> {user.name} </span> || 
                  Place: <span> {user.place} </span> --- <span className="text-success"> {user.status} </span>
                  {/* <button
              className="btn btn-outline-danger px-2 py-0"
              onClick={() => handleDeleteUser(user._id)}
            >
              X
            </button> */}
                </li>
        ))}
            </ul>
        </div>
    );
};

export default ManageOrders;