import React, { useState, useEffect } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const fetchedEvents = [];
        querySnapshot.forEach((doc) => {
          fetchedEvents.push({ id: doc.id, ...doc.data() });
        });
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events: ', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        eventName,
        organizer,
        time,
        date,
      });
      console.log('Event added with ID: ', docRef.id);
      // Reset form fields
      setEventName('');
      setOrganizer('');
      setTime('');
      setDate('');
      // Update the events list
      setEvents([...events, { id: docRef.id, eventName, organizer, time, date }]);
    } catch (error) {
      console.error('Error adding event: ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'events', id));
      console.log('Event deleted with ID: ', id);
      // Update the events list after deletion
      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error('Error deleting event: ', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="eventName" className="text-gray-600">Event Name:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizer" className="text-gray-600">Organizer:</label>
          <input
            type="text"
            id="organizer"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time" className="text-gray-600">Time:</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="text-gray-600">Date:</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="add-event-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Event
        </button>
      </form>
      <div className="events-list mt-6">
        {events.map((event) => (
          <div key={event.id} className="event-item-container">
            <div className="event-item bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold">{event.eventName}</h3>
              <p className="text-gray-600">Organizer: {event.organizer}</p>
              <p className="text-gray-600">Time: {event.time}</p>
              <p className="text-gray-600">Date: {event.date}</p>
              <button onClick={() => handleDelete(event.id)} className="delete-button mt-2 bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventForm;
