import { useState } from "react";
import "../src/App.css";
import RefHooks from "./components/RefHooks";
import ComponentOne from "./components/useCallback/ComponentOne";
import Comp1 from "./components/usememo/Comp1";
import FetchData from "./fetch/FetchData";
import PostData from "./fetch/PostData";
import BindingEvent from "./components/bindingEvents/BindingEvent";
import Form from "./components/formhandling/Form";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Header from "./components/FixedComp/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <RefHooks /> */}
      {/* <ComponentOne /> */}
      {/* <Comp1 /> */}
      {/* <FetchData /> */}
      {/* <PostData /> */}
      {/* <BindingEvent /> */}
      {/* <Form /> */}
      {/* <Header /> */}
      {/* ///////////////////////////////////////////// */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes> */}
      {/* {///////////////////////////////////////} */}
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
