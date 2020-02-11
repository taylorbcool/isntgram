import React from "react";
import {
  ThemeProvider,
  CSSReset,
  Box,
  Image,
  Flex,
  Badge,
  Text
} from "@chakra-ui/core";
import { FaHeart } from "react-icons/fa";
import { customTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />

      <Box
        maxWidth={400}
        p={4}
        borderRadius={4}
        borderWidth={2}
        borderStyle="solid"
        m="auto"
        my={4}
      >
        <Image rounded="md" src="https://bit.ly/2k1H1t6" />
        <Flex align="baseline" mt={2}>
          <Badge variantColor="brand">Hot</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="brand.800"
          >
            Posted @ DateTime
          </Text>
        </Flex>
        {/* <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text> */}
        <Text mt={2}>username</Text>
        <Flex mt={2} align="center">
          <Box as={FaHeart} color="orange.400" />
          <Text ml={1} fontsize="sm">
            <b>484</b> (190)
          </Text>
        </Flex>
      </Box>

      <Text textAlign="center">UI Example</Text>
    </ThemeProvider>
  );
}

export default App;
