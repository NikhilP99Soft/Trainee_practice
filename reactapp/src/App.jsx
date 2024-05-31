import { useState } from "react";
import RefHooks from "./components/RefHooks";
import ComponentOne from "./components/useCallback/ComponentOne";
import Comp1 from "./components/usememo/Comp1";
import FetchData from "./fetch/FetchData";
import PostData from "./fetch/PostData";
import Dynamic from "./dynamicRoute/Dynamic";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <RefHooks /> */}
      {/* <ComponentOne /> */}
      {/* <Comp1 /> */}
      {/* <FetchData /> */}
      {/* <PostData /> */}
      {/* <Dynamic /> */}
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
