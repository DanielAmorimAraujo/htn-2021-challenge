import React, { useState } from "react";

import Header from "components/header/header";
import EventList from "components/event-list/event-list";
import config from "library/config.json";

const App = (): React.ReactElement => {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = (email: string, password: string) => {
    if (email === config.USER_EMAIL && password === config.USER_PASSWORD) {
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <>
      <Header
        name={authenticated ? config.USER_FIRSTNAME : ""}
        authenticated={authenticated}
        authenticate={authenticate}
        logout={logout}
      />
      <EventList authenticated={authenticated} />
    </>
  );
};

export default App;
