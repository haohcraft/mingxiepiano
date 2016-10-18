import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { HamburgerMenuHOC, HamburgerMenu } from '../HamburgerMenu';
import Link from '../Link';
import HideOnLandingPage from '../HideOnLandingPage';

const TopBar = (props, { hamburgerMenu, isLandingPage }) => {
  return (
    <Headroom disableInlineStyles>
      <div className="inner">
        <div className="top-bar__logo">
          <Link
            to="/"
            onClick={hamburgerMenu.close}
          >
            <img
              src={require('./images/logo.svg')}
              alt="Syncano Logo"
            />
            <img
              className="white"
              src={require('./images/logo-white.svg')}
              alt="Syncano Logo"
            />
          </Link>
        </div>
        <nav className="top-bar__nav">
          <div
            className="top-bar__nav__hamburger"
            onClick={hamburgerMenu.toggle}
          >
            <img
              src={require('./images/hamburger.svg')}
              alt="hamburger icon"
            />
            <img
              className="close"
              src={require('./images/close.svg')}
              alt="hamburger icon"
            />
          </div>
          <div className="top-bar__nav__menu">
            <ul>
              <HideOnLandingPage>
                <li>
                  <Link
                    className="button button--noborder"
                    activeClassName="is-active"
                    to="/features/"
                  >
                    Features
                  </Link>
                </li>
              </HideOnLandingPage>
              <HideOnLandingPage>
                <li>
                  <Link
                    className="button button--noborder"
                    activeClassName="is-active"
                    to="/pricing/"
                  >
                    Pricing
                  </Link>
                </li>
              </HideOnLandingPage>
              <HideOnLandingPage>
                <li>
                  <Link
                    className="button button--noborder"
                    activeClassName="is-active"
                    to="/customers/"
                  >
                    Customers
                  </Link>
                </li>
              </HideOnLandingPage>
              <HideOnLandingPage>
                <li className="top-bar__nav__menu__item--docs">
                  <a
                    className="button button--noborder"
                    href="http://docs.syncano.io/"
                    target="_blank"
                  >
                    Docs
                  </a>
                </li>
              </HideOnLandingPage>
              <HideOnLandingPage>
                <li>
                  <Link
                    className="button button--noborder"
                    activeClassName="is-active"
                    to="/help/"
                  >
                    Help
                  </Link>
                </li>
              </HideOnLandingPage>
              <HideOnLandingPage>
                <li className="top-bar__nav__menu__item--blog">
                  <a
                    className="button button--noborder"
                    href="https://www.syncano.io/blog/"
                  >
                    Blog
                  </a>
                </li>
              </HideOnLandingPage>
                <HideOnLandingPage>
                  <li>
                    <span
                      className="button button--noborder"
                    >
                      Log In
                    </span>
                  </li>
                </HideOnLandingPage>
                <li>
                  <span
                    className="button top-bar__nav__menu__cta"
                  >
                    Sign Up For Free
                  </span>
                </li>
                <li>
                  <a
                    className="button top-bar__nav__menu__cta"
                  >
                    Go to Dashboard
                  </a>
                </li>
            </ul>
          </div>
        </nav>
      </div>
      <HamburgerMenu />
    </Headroom>
  );
};

TopBar.contextTypes = {
  hamburgerMenu: PropTypes.object,
  modals: PropTypes.object,
  isLandingPage: PropTypes.bool
};

export default HamburgerMenuHOC(TopBar);
