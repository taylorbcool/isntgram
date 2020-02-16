import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

const Comment = props => {
  return (
    <>
    <Flex align="baseline" mt={2}>
      <Text
        ml={2}
        textTransform="uppercase"
        fontSize="md"
        fontWeight="bold"
        color="brand.800"
      >
        {props.comment.userName}
      </Text>
    </Flex>
  {/* <Text mt={2} fontSize="l">{props.comment.userName}</Text> */}
  <Text mt={2} fontSize="l" fontWeight="semibold" lineHeight="short">
    {props.comment.content}
  </Text>
  </>
  )}

export default Comment