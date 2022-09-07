import React, { useEffect, useState } from "react";
import Search from "./Search";

export default function Manager() {
  const [data, setData] = useState({});

  function getData(info) {
    setData(info);
    // console.log(data);
  }

  return (
    <>
      <Search extract={getData} />
    </>
  );
}
