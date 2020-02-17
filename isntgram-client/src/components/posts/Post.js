import React from "react";
import {
  Box,
  Image,
  Flex,
  Badge,
  Text
} from "@chakra-ui/core";
import { FaHeart } from "react-icons/fa";
import CommentList from '../comments/CommentList'

function Post(props) {
  return (
      <Box
        maxWidth={400}
        p={4}
        borderRadius={4}
        borderWidth={2}
        borderStyle="solid"
        m="auto"
        my={4}
      >
        <Image rounded="md" src={props.post.img_url}/>
        <Flex align="baseline" mt={2}>
          <Badge variantColor="brand">Hot</Badge>
          {/* <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="brand.800"
          >
            {props.post.created}
          </Text> */}
        </Flex>
        <Text mt={2} fontSize="l" fontWeight="semibold" >
          {props.post.user_name}
          </Text>
        <Text mt={2} fontSize="xl"  lineHeight="short">
          {props.post.body}
        </Text>
        <Flex mt={2} align="center">
          <Box as={FaHeart} color="orange.400" />
          <Text ml={1} fontsize="sm">
            <b>{props.post.likes}</b>
          </Text>
        </Flex>
        {!props.post.comments ? console.log('no comments') :
        <CommentList comments={props.post.comments} />}
      </Box>
  );
}

export default Post;
