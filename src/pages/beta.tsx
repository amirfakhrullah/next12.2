import { NextPage } from "next";
import React from "react";
import Button from "../components/Button";

const Beta: NextPage = () => {
  const callApi = async (type: "edge" | "node") => {
    const res = await fetch(
      `/api/${type === "edge" ? "experimental-edge" : "nodejs"}`
    );

    const resJson = await res.json()

    console.log("res", resJson);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1300px",
        margin: "10px auto",
      }}
    >
      <Button onClick={() => callApi("node")}>Nodejs</Button>
      <Button onClick={() => callApi("edge")}>Edge</Button>
    </div>
  );
};

export default Beta;
