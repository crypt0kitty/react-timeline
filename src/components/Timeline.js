import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineEvents = props.events.map(event => {
    return (
      <TimelineEvent
        person={event.person}
        timestamp={event.timeStamp}
        status={event.status}
        key={event.timeStamp}
      />
    );
  })

  return (
    <div className="timeline">
      {timelineEvents}
    </div>
  );
}


export default Timeline;