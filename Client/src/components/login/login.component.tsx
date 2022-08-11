import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Auth } from "../../common/interfaces/auth.interface";
import { GET_TOKEN } from "../../hooks/useGetToken";

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ username, password }) => {
    if (username && password) {
      getToken({
        variables: {
          input: {
            username,
            password,
          },
        },
      });
    }
  });

  const [getToken, { loading, error }] = useMutation<Auth>(GET_TOKEN, {
    onCompleted: (data) => {
      setErrorMessage("");
      console.log(data); // the response
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={onSubmit}>
            <div className="d-grid gap-2">
              <Form.Control
                type="text"
                placeholder="username"
                {...register("username")}
              />

              <Form.Control
                type="password"
                placeholder="password"
                {...register("password")}
              />

              <Button
                disabled={loading}
                size="lg"
                variant="primary"
                type="submit"
                name="Login"
              >
                {loading && (
                  <Spinner size="sm" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}{" "}
                Login
              </Button>

              {errorMessage !== "" && (
                <p className="text-danger">{errorMessage}</p>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
