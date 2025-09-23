import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const sikkimFestivals = [
  {
    date: new Date(2025, 0, 15),
    name: "Losar Festival",
    description: "Tibetan New Year celebrated in monasteries.",
  },
  {
    date: new Date(2025, 1, 21),
    name: "Saga Dawa",
    description: "Celebration of Buddha's birth, enlightenment, and death.",
  },
  {
    date: new Date(2025, 2, 12),
    name: "Buddha Jayanti",
    description: "Commemorates the birth of Lord Buddha.",
  },
  {
    date: new Date(2025, 7, 20),
    name: "Dashain Festival",
    description: "Hindu festival celebrating victory of good over evil.",
  },
  {
    date: new Date(2025, 9, 5),
    name: "Kagyed Festival",
    description: "Monastic festival with masked dances.",
  },
  {
    date: new Date(2025, 11, 25),
    name: "Chhath Puja",
    description: "Sun worship festival celebrated by local communities.",
  },
];

const Visit = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (date) => {
    const event = sikkimFestivals.find(
      (e) =>
        e.date.getFullYear() === date.getFullYear() &&
        e.date.getMonth() === date.getMonth() &&
        e.date.getDate() === date.getDate()
    );
    setSelectedEvent(event || null);
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const event = sikkimFestivals.find(
        (e) =>
          e.date.getFullYear() === date.getFullYear() &&
          e.date.getMonth() === date.getMonth() &&
          e.date.getDate() === date.getDate()
      );
      if (event) {
        return (
          <div
            className="mt-1 text-xs bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-full px-2 py-1 cursor-pointer shadow-lg hover:scale-105 transition-transform text-center"
            title={event.name}
          >
            {event.name}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-20 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center items-center mb-4">
          <FiCalendar size={40} className="text-indigo-600" />
          <h1 className="text-5xl font-extrabold text-gray-800 ml-4">
            Sikkim Cultural Calendar
          </h1>
        </div>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Click on a date to see the festival details on the right.
        </p>
      </motion.div>

      {/* Calendar + Side Panel */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
        {/* Calendar */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-6 flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Calendar
            onChange={(date) => {
              setSelectedDate(date);
              handleDateClick(date);
            }}
            value={selectedDate}
            tileContent={tileContent}
            className="border-none text-gray-700"
          />
        </motion.div>

        {/* Side Panel */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-6 flex-1 min-h-[400px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {selectedEvent ? (
            <div>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">
                {selectedEvent.name}
              </h2>
              <p className="mb-3">{selectedEvent.description}</p>
              <p className="mb-6 font-semibold">
                Date: {selectedEvent.date.toDateString()}
              </p>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition">
                Book Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p className="text-xl mb-2">Select a festival date</p>
              <p className="text-sm">Festival details will appear here.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Visit;
