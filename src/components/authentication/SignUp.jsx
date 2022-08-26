import styles from "./SignUp.css";
import { Button, Form, Modal } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as registerAction from "../../redux/actions/actionRegister";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Redux
  const { registerUser } = bindActionCreators(registerAction, useDispatch());
  const userList = useSelector((state) => state.userList);

  // Validation
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const checkIfValid = () => {
    let isValid = true;
    userList.forEach((item) => {
      // Check if username is valid
      if (item.username === username) {
        isValid = false;
        setInvalidUsername(true);
      } else {
        setInvalidUsername(false);
      }

      // Check if email is valid
      if (item.email === email) {
        isValid = false;
        setInvalidEmail(true);
      } else {
        setInvalidEmail(false);
      }
    });

    // Check if password is the same with ConfirmPass
    if (password !== confirmPassword) {
      isValid = false;
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
    console.log("is valid", isValid);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(checkIfValid());
    if (checkIfValid()) {
      //console.log("valid");
      registerUser({ username, email, password });
      setShowModal(true);
    }
    //console.log("invalid.");
  };

  const closeRegistration = () => {
    setShowModal(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            isInvalid={invalidUsername}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            username already exists
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="su-formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            size="sm"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            isInvalid={invalidEmail}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            email already exists
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="su-formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            isInvalid={invalidPassword}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            The password confirmation does not match.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Re-Enter Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            isInvalid={invalidPassword}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            The password confirmation does not match.
          </Form.Control.Feedback>
        </Form.Group>

        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title className="text-dark">Congratulations!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            Successful Registration!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => closeRegistration()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="info" type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
