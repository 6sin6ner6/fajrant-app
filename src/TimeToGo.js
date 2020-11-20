import React from 'react';

const TimeToGo = props => {
return <p>Do fajrantu pozostało: {props.hours} godzin {props.minutes} minut {props.seconds} sekund</p>;
}

export default TimeToGo;