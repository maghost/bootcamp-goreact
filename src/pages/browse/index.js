import React from 'react';

import { Container, Title, List, Playlist } from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://i.scdn.co/image/3a75fdf63322a8fdc86951eb836542093872530b"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://i.scdn.co/image/3a75fdf63322a8fdc86951eb836542093872530b"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://i.scdn.co/image/3a75fdf63322a8fdc86951eb836542093872530b"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
