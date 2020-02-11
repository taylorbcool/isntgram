import React from "react";
import {
  Box,
  Image,
  Flex,
  Badge,
  Text
} from "@chakra-ui/core";
import { FaHeart } from "react-icons/fa";

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
        <Image rounded="md" src={props.img_url}/>
        <Flex align="baseline" mt={2}>
          <Badge variantColor="brand">Hot</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="brand.800"
          >
            {props.created}
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {props.body}
        </Text>
        <Text mt={2}>{props.user_id}</Text>
        <Flex mt={2} align="center">
          <Box as={FaHeart} color="orange.400" />
          <Text ml={1} fontsize="sm">
            <b>420</b>
          </Text>
        </Flex>
      </Box>
  );
}

export default Post;
