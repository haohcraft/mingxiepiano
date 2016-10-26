import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import { Hero, Section, Calendar } from './components';

export default class HomePage extends Component {
    static propTypes = {
        name: PropTypes.string
    };
    constructor(props) {
        super(props);
        this.cn = 'HomePage';
    }
    componentWillMount() {
    }
    render() {
        const cn = cx(this.cn, '');

        return <div className={cn}>
            <Hero imgUrl={require('./images/hero.jpg')}/>
            <Section title='performances'>
                <Calendar />
            </Section>
        </div>;
    }
}
