import React from "react";
import useSetDate from "../utils/useSetDate";
import Tooltip from "./Tooltip";

const Clock = () => {
  const { hour, mins, sec } = useSetDate();

  const secondsStyle = {
    transform: `rotateZ(${sec}deg)`,
  };
  const minutesStyle = {
    transform: `rotateZ(${mins}deg)`,
  };
  const hoursStyle = {
    transform: `rotateZ(${hour + mins / 12}deg)`,
  };

  return (
    <div>
      <h3>아날로그 시계</h3>

      <div className="clock">
        <div className="hour">
          <div className="hr" style={hoursStyle} id="hr"></div>
        </div>
        <div className="min">
          <div className="mn" style={minutesStyle} id="mn"></div>
        </div>
        <div className="sec">
          <div className="sc" style={secondsStyle} id="sc"></div>
        </div>
        <Tooltip />
      </div>
    </div>
  );
};

export default Clock;
