import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const time = <Timestamp time={props.Timestamp}/>;
  return(
    <div className="timeline-event">
      <p className="event-time">{time}</p>
      <p className="event-person">{props.person}</p>
      <p className="event-status">{props.status}</p>
    </div>
  );
}

export default TimelineEvent;
