import { Box, grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
    <Box w={{ base: "100%", md: "70%", xl: "50%" }} m={"auto"} gap={"50px"}>
      {data.map((e, i) => {
        return <Postcard key={i + 1} data={e} />;
      })}
    </Box>
  );
}
