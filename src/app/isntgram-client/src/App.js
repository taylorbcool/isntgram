import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import {
  ThemeProvider,
  CSSReset
} from '@chakra-ui/core';
import { customTheme } from "./theme";
import PostList from "./components/posts/PostList";
import Dashboard from './components/Dashboard.js';
import UserContext from './contexts/UserContext';
import PostContext from "./contexts/PostContext";
import LoadingContext from "./contexts/LoadingContext";
import axiosWithAuth from "./auth/axiosWithAuth";
import NavMenu from "./components/NavMenu";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   axiosWithAuth.get(`/users/${user.id}`)
  //     .then(res => {
  //       // console.log(`getting user with id of ${userId}`)
  //       // console.log(res)
  //       setUser(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <LoadingContext.Provider value={{isLoading, setIsLoading}} >
        <PostContext.Provider value={{posts, setPosts}}>
          <UserContext.Provider value={{user, setUser}} >
            <NavMenu />
            <Switch>
              <Route exact path='/' component={PostList} />
              <Route path='register' component={Register} />
              <Route path='login' component={Login} />
              <Route path={`/account/${user.id}`} component={Dashboard} />
            </Switch>
          </UserContext.Provider>
        </PostContext.Provider>
      </LoadingContext.Provider>
    </ThemeProvider>
  );
}

export default App;
