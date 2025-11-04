import { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "events"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  // Reuse your countdown hook
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
      <div className="shadow-md rounded-2xl overflow-hidden w-80 m-3 border border-gray-200 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-green-400">
        <img
          src={image || "/logo.png"}
          alt={name}
          className="w-full h-64 object-contain"
        />
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
      <h1 className="text-3xl font-bold text-center mb-6 text-green-300">
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
