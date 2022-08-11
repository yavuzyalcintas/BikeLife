import React from "react";
import { Container } from "react-bootstrap";
import Login from "../../components/login/login.component";

const LoginPage: React.FC = () => {
  return (
    <div className="login">
      <Container className="col-xs-6 col-md-4  col-lg-4 mx-auto">
        <h1>Welcome to BikeLife!</h1>
        <Login />
      </Container>
    </div>
  );
};

export default LoginPage;
