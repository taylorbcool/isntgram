import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  ThemeProvider,
  CSSReset
} from '@chakra-ui/core';
import { customTheme } from "./theme";
import PostList from "./components/posts/PostList";
import Dashboard from './components/Dashboard.js';

const axiosUser = axios.create({
  baseURL: 'http://73.98.63.133:5000/User/',
  headers: {'Access-Control-Allow-Origin': '*'}
})

const axiosPost = axios.create({
  baseURL: 'http://73.98.63.133:5000/Post',
  headers: {'Access-Control-Allow-Origin': '*'}
})

function App() {
  const userId = '0728a190-c8ca-4da9-ba6f-e69dc2380acc'
  const [user, setUser] = useState({})

  useEffect(() => {
    axiosUser.get(`${userId}`)
      .then(res => {
        // console.log(`getting user with id of ${userId}`)
        // console.log(res)
        setUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Dashboard user={user} />
      <PostList axiosPost={axiosPost} />
    </ThemeProvider>
  );
}

export default App;
