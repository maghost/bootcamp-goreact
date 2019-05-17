import React from 'react'
import PropTypes from 'prop-types'

const Header = prop => (
  <header className="AppHeader">
    <h3 className="AppHeader__title">{prop.title}</h3>
  </header>
)

Header.defaultProps = {
  title: 'Header'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
