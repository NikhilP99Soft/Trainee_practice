import { useState } from "react";
import "../src/App.css";
import RefHooks from "./components/RefHooks";
import ComponentOne from "./components/useCallback/ComponentOne";
import Comp1 from "./components/usememo/Comp1";
import FetchData from "./fetch/FetchData";
import PostData from "./fetch/PostData";
import BindingEvent from "./components/bindingEvents/BindingEvent";
import Form from "./components/formhandling/Form";

function App() {
  return (
    <>
      {/* <RefHooks /> */}
      {/* <ComponentOne /> */}
      {/* <Comp1 /> */}
      {/* <FetchData /> */}
      {/* <PostData /> */}
      {/* <BindingEvent /> */}
      <Form />
    </>
  );
}

export default App;
