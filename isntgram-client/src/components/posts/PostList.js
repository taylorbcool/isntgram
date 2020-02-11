import React, { useState, useEffect } from 'react'
import { Text, Progress } from '@chakra-ui/core'
import Post from './Post'

const PostList = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    props.axiosPost.get()
      .then(res => {
        setPosts(...res.data)
        console.log(posts)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

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