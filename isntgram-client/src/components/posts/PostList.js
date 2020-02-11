import React, { useState, useEffect } from 'react'
import { Text, Progress } from '@chakra-ui/core'
import Post from './Post'

const PostList = props => {
  console.log('props: ', props)

  return (
    <>
    {props.isLoading && <Progress color="brand.800" hasStripe isAnimated value={100} />}
      {!props.isLoading && (
      <>
        {
          props.posts.length > 0 ? (
            props.posts.map(post => (
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