import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import FacebookIcon from 'react-icons/lib/fa/facebook';
import SpotifyIcon from 'react-icons/lib/fa/spotify';
import './style.css';

const links = [{
    name: 'twiter',
    socialIcon: TwitterIcon,
    url: ''
}, {
    name: 'facebook',
    socialIcon: FacebookIcon,
    url: 'https://www.facebook.com/ming.xie.773'
}, {
    name: 'instagram',
    socialIcon: InstagramIcon,
    url: 'https://www.instagram.com/elephancy_/'
}, {
    name: 'spotify',
    socialIcon: SpotifyIcon,
    url: ''
}];

const Footer = ({ cn = 'Footer' }) => (
    <div className={cn}>
        CONNECT:
        {
            links.map((social, k) => {
                const SocialIcon = social.socialIcon;
                if (!social.url.length) return null;
                return <a key={k} href={social.url} title={social.social} target="_blank">
                    <SocialIcon />
                </a>;
            })
        }
        |<Link to='/'>Home</Link>
        |<Link to='/about/'>About</Link>
    </div>
);
Footer.propTypes = {
    cn: PropTypes.string
};

export default Footer;
