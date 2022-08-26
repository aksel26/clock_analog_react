import { useEffect, useState } from "react";

function useSetDate() {
  const deg = 6;
  const [now, setNow] = useState(() => new Date());
  const [timeInfo, setTimeInfo] = useState({});

  setInterval(() => {
    setNow(new Date());
  }, 1000);

  useEffect(() => {
    let hh = now.getHours() * 30;
    let mm = now.getMinutes() * deg;
    let ss = now.getSeconds() * deg;

    setTimeInfo({ hour: hh, mins: mm, sec: ss });
  }, [now]);

  return timeInfo;
}
export default useSetDate;
