import React, { useState } from "react";

import Navbar from "react-bootstrap/navbar";
import Nav from "react-bootstrap/nav";
import { Gear } from "react-bootstrap-icons";
import styled from "styled-components";

import Login from "components/login/login";

interface PHeader {
  name?: string;
  authenticated: boolean;
  authenticate: (email: string, password: string) => boolean;
  logout: () => void;
}

const SGear = styled(Gear)`
  margin-bottom: 8px;
`;

const SNavLink = styled(Nav.Link)`
  color: white;

  &:hover {
    color: white;
    opacity: 0.5;
  }
`;

/**
 * Header component
 * - contains site name and log in button
 *
 * @param props - Header props
 * @returns the Header component
 */
const Header = (props: PHeader): React.ReactElement => {
  const { name, authenticated, authenticate, logout } = props;
  const [show, setShow] = useState(false);

  const onHide = () => {
    setShow(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>
          <SGear /> Hack the North
        </Navbar.Brand>
        <Nav className="mr-auto" />
        {authenticated ? (
          <>
            <Navbar.Text className="d-none d-sm-block">
              Welcome {name || ""}
            </Navbar.Text>
            <SNavLink onClick={logout}>Log out</SNavLink>
          </>
        ) : (
          <SNavLink
            onClick={() => {
              setShow(true);
            }}
          >
            Log in
          </SNavLink>
        )}
      </Navbar>
      {show && (
        <Login show={show} onHide={onHide} authenticate={authenticate} />
      )}
    </>
  );
};

export default Header;
