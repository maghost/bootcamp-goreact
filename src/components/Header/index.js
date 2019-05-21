import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/22780571_1716789968332035_1298663098724585693_n.jpg?_nc_cat=110&_nc_ht=scontent.xx&oh=1c1c28bbab2d8b508137df8dd67ee067&oe=5D53BE78"
        alt="Avatar"
      />
      Matheus Marques
    </User>
  </Container>
);

export default Header;
