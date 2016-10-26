import React, { PropTypes } from 'react';
import moment from 'moment';
import Event from './event';
import './list.css';

const EVENTS = [
    {
        date: '10/07/2016',
        hallName: 'paul recital hall',
        city: 'NYC',
        orchestra: 'solo recital',
        conductor: '',
        program: 'Works by Bach, Beethoven, Albeniz, Ravel, Ginastera',
        url: ''
    }, {
        date: '01/28/2017',
        hallName: '',
        city: 'Bogotá, Columbia',
        orchestra: 'solo recital',
        conductor: '',
        program: 'Works by Beethoven, Ravel, Granaods, Brahms',
        url: ''
    }, {
        date: '10/18/2016',
        hallName: 'DOMO Universitario de Curundu',
        city: 'Panama City, Panama',
        orchestra: 'Orquesta Sinfónica Nacional',
        conductor: 'Jorge Ledezma-Bradley',
        program: 'Prokofiev Piano Concerto No. 3 in C Major, OP. 26',
        url: ''
    }
];
const DATE_FORMAT = 'MM/DD/YYYY';
const CalendarList = ({ cn = 'CalendarList', events = EVENTS }) => {
    // TODO: move this sorting logic to sever
    const sorted = events.sort((a, b) => (
        moment(a.date, DATE_FORMAT).toDate().getTime()
            <
        moment(b.date, DATE_FORMAT).toDate().getTime()
    ));
    return <div className={cn}>
        {
            sorted.map((e, k) => {
                const { date, ...rest } = e;
                const dateMoment = moment(date, DATE_FORMAT);
                const p = {
                    ...rest,
                    dateDay: dateMoment.date(),
                    date: dateMoment.format('MMM YYYY'),
                    day: dateMoment.format('ddd')
                };
                return <Event key={k} {...p} />;
            })
        }
    </div>;
};
CalendarList.propTypes = {
    cn: PropTypes.string,
    events: PropTypes.array
};

export default CalendarList;
