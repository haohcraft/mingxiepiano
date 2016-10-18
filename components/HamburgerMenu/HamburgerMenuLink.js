import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const HamburgerMenuLink = (props, { hamburgerMenu }) => {
  if (props.href) {
    return (
      <a
        {...props}
        onClick={hamburgerMenu.toggle}
      />
    );
  }

  return (
    <Link
      {...props}
      onClick={hamburgerMenu.toggle}
    />
  );
};

HamburgerMenuLink.contextTypes = {
  hamburgerMenu: PropTypes.object
};

export default HamburgerMenuLink;
