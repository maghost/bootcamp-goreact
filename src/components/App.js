import React, { Component, Fragment } from 'react'

import Header from '@/components/Header'
import Post from '@/components/Post'

export default class App extends Component {
  state = {
    posts: [
      {
        id: 3,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sapien ac mi sodales facilisis sit amet quis sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer neque justo, dictum in nibh ut, varius vestibulum velit. Vivamus fringilla justo ut luctus rhoncus. Phasellus sed eros lorem. Phasellus ornare luctus sagittis. Vestibulum gravida ut purus id dapibus.',
        time: 'há 3 min',
        user: {
          nickname: 'Lorem Ipsum',
          avatar: 'https://randomuser.me/api/portraits/lego/6.jpg'
        }
      },
      {
        id: 2,
        text:
          'Aenean dapibus quam a sem dictum, id placerat nibh accumsan. Etiam a porta eros. Proin feugiat nulla neque, ac iaculis metus maximus pharetra. Nunc tempor nunc euismod lorem suscipit pellentesque. Morbi at varius dolor. Praesent tincidunt vehicula lectus, et feugiat turpis sodales vel. Fusce mattis felis vitae nunc fermentum, id porta enim tristique.',
        time: 'há 10 min',
        user: {
          nickname: 'Mr. James Umbrella',
          avatar: 'https://randomuser.me/api/portraits/lego/1.jpg'
        }
      },
      {
        id: 1,
        text:
          'Suspendisse laoreet volutpat nulla, at fermentum massa tincidunt sed. Sed eu ex vel lacus efficitur vestibulum ut vel eros. Integer rutrum ex eu mauris pulvinar, sit amet tempor est lobortis. Etiam lorem ipsum, dictum ac lectus eget, porta vehicula massa. Vestibulum posuere suscipit purus, sed interdum diam condimentum ut. Vivamus at finibus mauris. Quisque vestibulum magna in posuere scelerisque. In ultrices justo mauris, at gravida nulla tincidunt vel. Mauris tempor ullamcorper quam, eu hendrerit tellus feugiat et.',
        time: 'há 20 min',
        user: {
          nickname: 'Dr. Nerd Destroyer',
          avatar: 'https://randomuser.me/api/portraits/lego/3.jpg'
        }
      }
    ]
  }

  render () {
    const { posts } = this.state

    return (
      <Fragment>
        <Header title="RocketBook" />
        <div className="PostList">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    )
  }
}
