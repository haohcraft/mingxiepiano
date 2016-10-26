import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { menu } from './constants';

const cn = 'TopBar';
const TopBar = () => (
    <Headroom disableInlineStyles>
        <div className={cn}>
            <div className={`${cn}-container`}>
                {
                    menu.map((p) => {
                        if (p.name === 'Home') {
                            return <Link
                                key={p.id}
                                className={`${cn}-container-link ${p.name}`}
                                to={p.url}>
                            </Link>;
                        }
                        return <Link
                            key={p.id}
                            className={`${cn}-container-link ${p.name}`}
                            to={p.url}>{p.name}</Link>;
                    })
                }
            </div>
        </div>
    </Headroom>
);


export default TopBar;

