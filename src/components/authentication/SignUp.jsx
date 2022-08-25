import styles from "./SignUp.css";
import { Button, Form } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as registerAction from "../../redux/actions/actionRegister";

export default function Signup() {
  const { registerUser } = bindActionCreators(registerAction, useDispatch());

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ username: "test1", email: "testemail", password: 123 });
  };

  return (
    <div className={styles.container}>
      <Form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Your Username"
            autoComplete="username"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="su-formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            size="sm"
            placeholder="Enter Your Email"
            autoComplete="email"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="su-formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Enter Your Password"
            autoComplete="new-password"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Re-Enter Your Password"
            autoComplete="new-password"
          ></Form.Control>
        </Form.Group>

        <Button variant="info" type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
