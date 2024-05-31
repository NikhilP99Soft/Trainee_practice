import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.address.city}</h3>
    </div>
  );
};

export default Details;
