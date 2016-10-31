import React from 'react';
import { rhythm } from '../utils/typography';
import { TopBar, Footer } from '../components';

import 'flexboxgrid';
import './base.css';

const tml = (props) => (
    <div>
        <TopBar />
        <div
            style={{
                margin: '0 auto',
                maxWidth: '65em',
                padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                paddingTop: 90
            }}
        >
            {props.children}
            <Footer />
        </div>

    </div>
);
export default tml;
