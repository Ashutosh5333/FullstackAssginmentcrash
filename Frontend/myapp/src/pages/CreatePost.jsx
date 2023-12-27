import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Input, Text, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { AddPost } from '../Redux/AppReducer/action';

const CreatePost = () => {
  const dispatch = useDispatch()
const [title,SetTitle] = useState("");
const [pic,Setpic] = useState("");
const toast = useToast()
const [description,Setdescription] = useState("")

  const payload={
     title,
     description,
     pic
  }


  const handleSubmit = () =>{
      dispatch(AddPost(payload))
      .then((res) => {
        console.log("posstt",res)
          if(res.payload){
            toast({
              position:"top",
              status : "success",
              title:"create post succsefullly"
             })
          }
      })
      .catch((err) => {
        console.log(err);
        toast({
          position : 'top',
          colorScheme : 'red', 
          status : "error",
          title:err
        })
      });
 }


  return (
    <>
      <Box maxH="500px">
        <Box
          width="90vw"
          m="auto"
          display="flex"
          justifyContent={"space-between"}
          gap="5"
          mt="10"
        >
          <Text
            fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}
            fontWeight={"600"}
          >
            {" "}
            Publish A Post{" "}
          </Text>

          <Button
            p="4"
            onClick={handleSubmit}
            colorScheme="facebook"
            fontSize={"1.2rem"}
            fontWeight={"600"}
          >
            {" "}
            Publish{" "}
          </Button>
        </Box>

        <Divider color={"gray"} width="90vw" m="auto" mt="10" />

        <Box width="80vw" m="auto" mt="10">
          <Input
            variant={"unstyled"}
            name="title"
            onChange={(e) => SetTitle(e.target.value)}
            fontSize={{ base: "1.5rem", md: "1.5rem", lg: "3.4rem" }}
            placeholder="Title"
          />
        </Box>

        <Box width="80vw" m="auto" mt="10">
          <Input
            variant={"unstyled"}
            onChange={(e) => Setdescription(e.target.value)}
            name="description"
            fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}
            placeholder="+ Add a Content"
          />
        </Box>

        <Box width="80vw" m="auto" mt="10">
          <Input
            variant={"unstyled"}
            name="url"
            onChange={(e) => Setpic(e.target.value)}
            fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}
            placeholder="+ Add a Image"
          />
        </Box>
      </Box>
    </>
  );
};

export default CreatePost;
