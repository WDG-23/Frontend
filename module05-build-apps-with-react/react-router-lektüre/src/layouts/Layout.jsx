import { Outlet } from "react-router";
import { NavBar } from "../components/shared";
import { useState } from "react";

const Layout = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div>
      <NavBar signedIn={signedIn} setSignedIn={setSignedIn} />
      <main>
        <Outlet context={{ signedIn, setSignedIn }} />
      </main>
    </div>
  );
};

export default Layout;
