import { useState } from "react";
import RefHooks from "./components/RefHooks";
import ComponentOne from "./components/useCallback/ComponentOne";
import Comp1 from "./components/usememo/Comp1";
import FetchData from "./fetch/FetchData";
import PostData from "./fetch/PostData";

function App() {
  return (
    <>
      {/* <RefHooks /> */}
      {/* <ComponentOne /> */}
      {/* <Comp1 /> */}
      {/* <FetchData /> */}
      <PostData />
    </>
  );
}

export default App;
