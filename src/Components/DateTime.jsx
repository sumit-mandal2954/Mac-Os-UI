import React, { useEffect, useState } from "react";

function DateTime() {
  const [dateTime, setdateTime] = useState("");
  const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const updateTime = () => {
      const currendateTime = new Date();
      const date = currendateTime.getDate();
      const month = monthsShort[currendateTime.getMonth()];
      const day = shortDays[currendateTime.getDay()];
      const min = currendateTime.getMinutes();
      const hour = currendateTime.getHours();
      setdateTime(`${day} ${month} ${date} ${hour}:${min}`);
    };
    updateTime();
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{dateTime}</div>;
}

export default DateTime;
