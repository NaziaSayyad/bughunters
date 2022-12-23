import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const axios = require("axios");
import { Postcard } from "./Postcard";
export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/posts/all")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  return (
    <Box w={"100%"}>
      {data.map((e, i) => {
        return <Postcard key={i + 1} data={e} />;
      })}
    </Box>
  );
}
