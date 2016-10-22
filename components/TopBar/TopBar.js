import React from 'react';
import Headroom from 'react-headroom';
import Link from '../Link';
import { menue } from './constants';

const cn = 'TopBar';
const TopBar = () => (
    <Headroom disableInlineStyles>
        <div className={cn}>
            <div className={`${cn}-container`}>
                {
                    menue.map((p) => {
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

