import React from 'react';
import { Container } from 'react-responsive-grid';
import { rhythm } from '../utils/typography';
import { TopBar, Footer } from '../components';
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
            <Footer />
        </Container>

    </div>
);
export default tml;
