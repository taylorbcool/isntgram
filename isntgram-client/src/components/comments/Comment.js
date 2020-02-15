import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

const Comment = props => {
  return (
    <>
    <Flex align="baseline" mt={2}>
      <Text
        ml={2}
        textTransform="uppercase"
        fontSize="sm"
        fontWeight="bold"
        color="brand.800"
      >
        {props.comment.created}
      </Text>
    </Flex>
  <Text mt={2} fontSize="l">{props.comment.user_name}</Text>
  <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
    {props.comment.body}
  </Text>
  </>
  )}

export default Comment