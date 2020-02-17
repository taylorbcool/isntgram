import React from 'react'
import {
  Box,
} from '@chakra-ui/core'
import Comment from './Comment'

const CommentList = props => {
  return(
      <Box
        maxWidth={400}
        p={4}
        borderRadius={4}
        borderWidth={2}
        borderStyle="solid"
        m="auto"
        my={4}
      >
        {props.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Box>
  )
}

export default CommentList