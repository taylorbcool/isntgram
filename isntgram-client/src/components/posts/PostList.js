import React, { useState, useEffect, useContext } from 'react'
import { Text, Progress } from '@chakra-ui/core'
import axiosWithAuth from '../../auth/axiosWithAuth'
import Post from './Post'
import PostContext from '../../contexts/PostContext'
import LoadingContext from '../../contexts/LoadingContext'

const PostList = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const { posts, setPosts } = useContext(PostContext)

  useEffect(() => {
    axiosWithAuth.get('/post')
    .then(res => {
      setPosts([...posts, ...res.data])
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
    {isLoading && <Progress color="brand.800" hasStripe isAnimated value={100} />}
      {!isLoading && (
      <>
        {
          posts.length > 0 ? (
            posts.map(post => (
            <Post key={post.id} post={post} />
        )))
        : (
          <Text 
            ml={2}
            fontSize="sm"
            color="brand.800"
          >
            No posts...
          </Text>
        )}
      </>
      )}
    </>
  )
}

export default PostList