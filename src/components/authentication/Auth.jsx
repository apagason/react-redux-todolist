import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import { Nav, Col, Row, Tab } from "react-bootstrap";
import SignUp from "./SignUp";
import Login from "./Login";

function Auth() {
  return (
    <div className="Auth">
      <Tab.Container id="left-tab-example" defaultActiveKey="first">
        <Row className="rowContainer">
          <Col sm={4} className="selectorSection">
            <Nav variant="pills" className="flex-column btnContainer">
              <Nav.Item>
                <Nav.Link eventKey="first">Register</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <SignUp />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Login />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Auth;
