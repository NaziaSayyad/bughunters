import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Postcard } from "../Components/postCard";

export default function MyPost() {
  const [data, setData] = useState();
  // function getData()
  // {
  //    return fetch("http://localhost:3000/api/posts".{
  //     method:"GET",
  //     headers:{
  //        "authorization": JSON.parse(localStorage.getItem("token")),
  //     }
  //    }) .then((res)=>res.json())
  //    .then((res)=>{
  //     console.log(res)
  //    })
  // }
  function getData() {
    return fetch("http://localhost:3000/api/posts", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res.myposts);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <Box
        pt="70px"
        w={{ base: "100%", md: "100%", xl: "100%" }}
        m={{ base: "auto", md: "auto" }}
      >
        <Grid templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2,1fr)" }}>
          {data?.map((e, i) => (
            <GridItem>
              <Postcard key={i + 1} data={e} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
