import React, { useEffect, useState } from "react";

const Lists = () => {
  const [arr, setArr] = useState([]);

  let url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArr(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ol>
        {arr.map((ele, index) => (
          <>
            <li key={ele.id + index}>{ele.name}</li>
            {/* <li key={index}>City - {ele.address.city}</li> */}
          </>
        ))}
      </ol>
    </>
  );
};

export default Lists;
