import React, { useState, useEffect } from "react";

const Api = () => {
  // https://randomuser.me/api
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <img src={data.results[0].picture.medium} alt="random user" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Api;
