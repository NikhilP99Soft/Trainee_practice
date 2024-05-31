import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dynamic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {Array.isArray &&
        data.map((ele) => {
          return (
            <h1 key={ele.id}>
              <Link to={`/dynamic/details/${ele.id}`}>{ele.name}</Link>
            </h1>
          );
        })}
    </div>
  );
};

export default Dynamic;
