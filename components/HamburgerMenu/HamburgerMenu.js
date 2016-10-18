import React, { PropTypes } from 'react';
import { HamburgerMenuLink } from '../HamburgerMenu';
import HideOnLandingPage from '../HideOnLandingPage';

const HamburgerMenu = (props, { }) => {
  return (
    <nav className="hamburger-menu">
      <div className="inner">
        <HideOnLandingPage>
          <div className="hamburger-menu__menu">
            <ul>
              <li>
                <HamburgerMenuLink
                  activeClassName="is-active"
                  to="/features/"
                >
                  Features
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink
                  activeClassName="is-active"
                  to="/pricing/"
                >
                  Pricing
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink
                  activeClassName="is-active"
                  to="/customers/"
                >
                  Customers
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink
                  href="http://docs.syncano.io/"
                  target="_blank"
                >
                  Docs
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink
                  activeClassName="is-active"
                  to="/help/"
                >
                  Help
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink href="https://www.syncano.io/blog/">
                  Blog
                </HamburgerMenuLink>
              </li>
            </ul>
          </div>
        </HideOnLandingPage>
        <div className="hamburger-menu__buttons">
          <ul>
              <HideOnLandingPage>
                <li>
                  <span
                    className="button button--large"
                  >
                    Log In
                  </span>
                </li>
              </HideOnLandingPage>
              <li>
                <span
                  className="button button--large button--featured"
                >
                  Sign Up For Free
                </span>
              </li>
              <li>
                <a
                  className="button button--large button--featured"
                >
                  Go to Dashboard
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

HamburgerMenu.contextTypes = {
};

export default HamburgerMenu;
