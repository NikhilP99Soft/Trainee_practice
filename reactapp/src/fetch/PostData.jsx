import React, { useEffect, useState } from "react";

const PostData = () => {
  const [data, setData] = useState([]);
  const obj = {
    name: "Nikhil",
    lname: "Aher",
  };

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log("err", e);
      });
  }, []);

  return (
    <div>
      <h1>Posted Data</h1>
    </div>
  );
};

export default PostData;
