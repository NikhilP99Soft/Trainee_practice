import React from "react";
import { useEffect, useState, useRef } from "react";

//useRef() hook directly select the DOM with using the ref attribute;
//it can store mutable value that does not re-render when updated;
//useRef returns the current object
//it create mutable vriable whch will not rerender the component;
//useRef stops from rerendering if the value is changed

function RefHooks() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  //it is like doing this
  //let count ={current : 0} so we can accesss count.current

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount(count + 1);
  // });

  // console.log(count);
  useEffect(() => {
    console.log(count);
    count.current = count.current + 1;
  }, []);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default RefHooks;

/*************************************************************************************/

//we can access DOM using useRef hook;

// function RefHooks() {
//   const inputElement = useRef();

//   const FocusInput = () => {
//     inputElement.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputElement} />
//       <br />
//       <button
//         onClick={() => {
//           FocusInput();
//         }}
//       >
//         Focus Me
//       </button>
//     </>
//   );
// }

// export default RefHooks;

/*********************************************************************************/
//we can store the previus input value

// const RefHooks = () => {
//   const [inputValue, setInputValue] = useState("");
//   const PreviousInputValue = useRef("");

//   useEffect(() => {
//     PreviousInputValue.current = inputValue;
//   }, [inputValue]);
//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//       />
//       <h1>previous value : {PreviousInputValue.current}</h1>
//     </>
//   );
// };

// export default RefHooks;
