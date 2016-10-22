import React, { PropTypes } from 'react';
import { Container } from 'react-responsive-grid';
import { rhythm } from '../utils/typography';
import { TopBar } from '../components';
import './base.css';

const tml = (props) => (
    <div>
        <TopBar />
        <Container
            style={{
                maxWidth: '85.625em',
                padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                paddingTop: 90
            }}
        >
            {props.children}
        </Container>
    </div>
);
tml.propTypes = {
    children: PropTypes.any
};
export default tml;
