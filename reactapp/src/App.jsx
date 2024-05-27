import { useState } from "react";
import RefHooks from "./components/RefHooks";
import ComponentOne from "./components/useCallback/ComponentOne";
import Comp1 from "./components/usememo/Comp1";

function App() {
  return (
    <>
      {/* <RefHooks /> */}
      {/* <ComponentOne /> */}
      <Comp1 />
    </>
  );
}

export default App;
