import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";


const Login = () => {
  const {
    signInUsingGoogle,
    setUser,
    setIsLoading
  } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleWithGoogle = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(location.state?.from || "/Home");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

              
                <button className="bg-light border-0" onClick={handleWithGoogle}>
                  <img width="45%%" src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="" />
                </button>
                    
          </div>
          <div className="col-lg-5 col-9">
            <img
              width="100%"
              src="https://www.sofikart.com/assets/img/pwd2.jpg"
              alt="" />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
