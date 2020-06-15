import React, { useState } from 'react'
import { 
  Box,
  Flex,
  Text } from '@chakra-ui/core'

  const Register = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    
    return(
      <Box
        maxWidth={650}
        p={4}
        borderRadius={4}
        borderWidth={2}
        borderStyle="solid"
        m="auto"
        my={4}
      >
        <Input variant="flushed" placeholder="Email" />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Verify Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    )
  }

  export default Register