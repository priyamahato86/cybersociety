import React, { useEffect, useState } from "react";

const App = () => {
  const events = [
    {
      id: 1,
      name: "Cybercon 2025",
      date: "2025-04-25T15:00:00",
      image: "event1.jpg",
    },
    {
      id: 2,
      name: "Introduction to Assembly Language",
      date: "2025-04-13T20:00:00",
      image: "event2.jpg",
    },
    {
      id: 3,
      name: "Digital Stream Decoding",
      date: "2025-04-06T20:00:00",
      image: "event3.jpg",
    },
    {
      id: 4,
      name: "Real world cyber threats and Mitre Attack",
      date: "2025-03-06T20:00:00",
      image: "event4.png",
    },
    {
      id: 5,
      name: "Red and blue teaming",
      date: "2025-03-13T20:00:00",
      image: "event5.png",
    },
    {
      id: 6,
      name: "Networking Fundamentals",
      date: "2025-03-20T19:00:00",
      image: "event6.png",
    },
    {
      id: 7,
      name: "Building a career in cybersecurity",
      date: "2025-03-24T20:00:00",
      image: "event7.png",
    },
  ];

  const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
      return () => clearInterval(interval);
    }, [countDownDate]);

    const getReturnValues = (countDown) => {
      if (countDown <= 0) return [0, 0, 0, 0];
      const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
      return [days, hours, minutes, seconds];
    };

    return getReturnValues(countDown);
  };

  const EventCard = ({ name, date, image }) => {
    const [days, hours, minutes, seconds] = useCountdown(date);

    return (
      <div className="shadow-md rounded-2xl overflow-hidden w-80 m-3 border border-gray-200 flex flex-col">
        <img src={image} alt={name} className="w-full h-64 object-contain" />
        <div className="p-4 bg-white flex-1 flex flex-col justify-between">
          <div>
            <p className="text-gray-600 text-sm mb-2">
              Scheduled for: {new Date(date).toLocaleString()}
            </p>

            <div className="text-lg font-mono text-blue-600 mb-4">
              {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
                <span className="text-red-500 font-semibold">
                  Session Ended
                </span>
              ) : (
                `${days}d ${hours}h ${minutes}m ${seconds}s`
              )}
            </div>
          </div>
          <h2 className="text-center font-bold text-xl mt-auto text-black">
            {name}
          </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6  text-green-300">
        {" "}
        Events
      </h1>
      <div className="flex flex-wrap justify-center">
        {events.map((event) => (
          <EventCard
            key={event.id}
            name={event.name}
            date={event.date}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
