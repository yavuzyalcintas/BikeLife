import React from "react";
import Login from "../../components/login/login.component";

const LoginPage: React.FC = () => {
  return (
    <div className="login">
      <h1>Welcome to BikeLife!</h1>
      <Login></Login>
    </div>
  );
};

export default LoginPage;
