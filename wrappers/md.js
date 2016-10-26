import React, { PropTypes } from 'react';
import './md.css';

const md = (props) => {
    const post = props.route.page.data;
    return (
        <div className="markdown">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
    );
};
md.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.shape({
            data: PropTypes.obj
        })
    }),
    tile: PropTypes.string,
    body: PropTypes.any
};
export default md;
