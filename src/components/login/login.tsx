import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GearFill, Eye, EyeSlash } from "react-bootstrap-icons";
import styled from "styled-components";

interface PLogin {
  show: boolean;
  onHide: () => void;
  authenticate: (email: string, password: string) => boolean;
}

const SModalHeader = styled(Modal.Header)`
  border-bottom: 0;
`;

const SLoginWrapper = styled.div`
  width: 384px;
  height: 384px;
  margin: auto;
  padding: 0 16px;
  text-align: center;
`;

const SLoginHeader = styled.div`
  margin: 16px 0;
`;

const SGearFill = styled(GearFill)`
  margin: 10px;
  float: right;
  width: 32px;
`;

const SLoginTitle = styled.div`
  text-align: left;
  font-size: 21px;
  margin-top: 8px;
`;

const SButton = styled(Button)`
  background-color: rgb(55, 63, 87);
  color: white;
  width: 256px;
  font-size: 16px;
  border-radius: 48px;
  margin: 16px 0;
  padding: 16px;
  border: none;

  &:hover {
    background-color: rgb(55, 63, 87);
    opacity: 0.8;
  }

  &:disabled {
    background-color: rgb(55, 63, 87);
    opacity: 0.5 !important;
  }

  &:focus {
    background-color: rgb(55, 63, 87);
  }
`;

const SLoginError = styled.div`
  margin: 8px;
  font-size: 12px;
  color: red;
`;

/**
 * Login component
 * - provides form for user to log in
 *
 * @param props - Login props
 * @returns the Login component
 */
const Login = (props: PLogin): React.ReactElement => {
  const { show, onHide, authenticate } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const validateLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    if (authenticate(email, password)) {
      onHide();
    } else {
      setIncorrect(true);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <SModalHeader closeButton />
      <SLoginWrapper>
        <SLoginHeader>
          <Row noGutters>
            <Col xs={4}>
              <SGearFill size={24} />
            </Col>
            <Col>
              <SLoginTitle>Let's Get Hacking</SLoginTitle>
            </Col>
          </Row>
        </SLoginHeader>
        <Form onSubmit={validateLogin}>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                if (incorrect) setIncorrect(false);
              }}
            />
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <Form.Control
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                  if (incorrect) setIncorrect(false);
                }}
              />
              <InputGroup.Append>
                <InputGroup.Text
                  onClick={() => {
                    setPasswordVisible(!passwordVisible);
                  }}
                >
                  {passwordVisible ? <Eye /> : <EyeSlash />}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <SButton type="submit" disabled={!email || !password}>
            Log in
          </SButton>
          {incorrect && <SLoginError>Incorrect email or password</SLoginError>}
        </Form>
      </SLoginWrapper>
    </Modal>
  );
};

export default Login;
