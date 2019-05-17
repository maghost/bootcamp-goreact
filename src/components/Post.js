import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from '@/components/PostHeader'

const Post = props => (
  <div className="Post">
    <PostHeader post={props.data} />
    <div className="Post__text">{props.data.text}</div>
  </div>
)

Post.propTypes = {
  data: PropTypes.object.isRequired
}

export default Post
