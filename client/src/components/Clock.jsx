import { useState, useEffect } from "react";

function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
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

  const day = days[dateTime.getDay()];
  const date = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();

  const dateZone = new Date();
  const timeZoneOffset = dateZone
    .toLocaleTimeString("en", { timeZoneName: "short" })
    .split(" ")[2];

  return (
    <div>
      <div>
        {day}, {month} {date}, {year}
      </div>
      <div className="flex flex-row items-center">
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds} {timeZoneOffset}
      </div>
    </div>
  );
}

export default Clock;
