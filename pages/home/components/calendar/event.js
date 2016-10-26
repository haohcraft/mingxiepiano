import React, { PropTypes } from 'react';

const Event = ({ cn = 'Event', ...props }) => (
    <div className={cn}>
        <div className={`${cn}-info`}>
            <h1>{props.dateDay}</h1>
            <h6 className={`${cn}-info-date`}>{props.date}</h6>
            <h6 className={`${cn}-info-day`}>{props.day}</h6>
            <hr />
            <p className={`${cn}-info-city`}>{props.city}</p>
            {
                props.hallNanme &&
                    <p className={`${cn}-info-hallNanme`}>{props.hallNanme}</p>
            }
        </div>
    </div>
);
Event.propTypes = {
    cn: PropTypes.string,
    dateDay: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    hallNanme: PropTypes.string
};

export default Event;
