import React from 'react'
import { 
  Box,
  Flex,
  Text } from '@chakra-ui/core'

const Dashboard = props => {
  return (
    <Box
      maxWidth={650}
      p={4}
      borderRadius={4}
      borderWidth={2}
      borderStyle="solid"
      m="auto"
      my={4}
    >
      <Flex align="baseline" mt={2}>
        <Text
          ml={2}
          fontSize="lg"
          color="brand.800"
        >
          {props.user.username}
        </Text>
      </Flex>
      <Text
        ml={2}
        fontSize="md"
        color="brand.800"
      >
        {props.user.bio}
      </Text>
      <Text
        ml={2}
        textTransform="uppercase"
        fontSize="sm"
        fontWeight="bold"
        color="brand.900"
      >
        Account created: {props.user.created}
      </Text>
    </Box>
  )
}

export default Dashboard