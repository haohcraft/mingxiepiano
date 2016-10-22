import React from 'react';
import Helmet from 'react-helmet';
import './style.css';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Helmet
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />
                <h1>
                  Hi people
                </h1>
            </div>
        );
    }
}
