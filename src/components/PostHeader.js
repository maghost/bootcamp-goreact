import React from 'react'
import PropTypes from 'prop-types'

const PostHeader = prop => (
  <div className="PostHeader">
    <img src={prop.post.user.avatar} className="PostHeader__avatar" />
    <div className="PostHeader__data">
      <strong className="PostHeader__nickname">
        {prop.post.user.nickname}
      </strong>
      <span className="PostHeader__timer">{prop.post.time}</span>
    </div>
  </div>
)

PostHeader.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostHeader
