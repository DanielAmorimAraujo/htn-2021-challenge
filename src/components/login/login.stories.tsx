import React from "react";
import Login from "./login";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Login",
  component: Login,
};

/**
 * @returns the default storybook
 */
export const Default = (): React.ReactElement => (
  <Login
    show={true}
    onHide={() => undefined}
    authenticate={(email: string, password: string) => false}
  />
);
