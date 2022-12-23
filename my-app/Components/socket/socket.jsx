import { background, Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react"
import io from 'Socket.IO-client'
// import io from "socket.io"
let socket;

export default function Socket() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState([]); 
  const [history, sethistory] = useState([]);
  
 
  useEffect(() => {
    socketInitializer()
  }, [])

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('Connected')
    })
    socket.on("history" ,(history) =>{
        for(let h of history){
           sethistory(h)
        }
    })
    socket.on('newtext' , (msg) =>{
      setMessage(msg);
    })
    socket.on("newuser", (users) =>{
        setusers(users)
    })
}
const handlechats = (e) =>{
  e.preventDefault();
 setMessage([...message, input])
 
 socket.emit("newtext", [...message, input]);
 setInput('');
}


  const onChangeHandler = (e) => {
    setInput(e.target.value)
}


  return (
    <>
   
    <Box h={'50vh'}>
    <div style={{border:"2px solid", margin:"25px", width:"350px",
    
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    color: "white",
    backgroundImage:"radial-gradient(circle at 27.1% 51.8%, #0c3542 0.5%, #28324c 94.4%)",
    // height:"350px"
    }}>
    
      <form>

<div>
     
       {
        message.map((item, i)=>(
          <Box key={i}>  
          
            <Text color={"white"} fontWeight={'bold'}>{item } {" "}</Text>
            <br />
          </Box>
        ))
       }
  </div>
        <Stack display={'flex'} flexDirection={"row"} alignItems={'center'} justifyContent='space-around'>
        <Input  
        fontWeight='bold'
        color= "white"
        placeholder="Ask Anything "

        value={input}
        onChange={onChangeHandler}
        />
        <Button onClick={handlechats} type= "submit" bg={'transparent'} alignItems={'center'}>  Submit </Button>
        </Stack>

  
</form>

    </div>
    </Box>
   
   
    </>
   
  )

}
