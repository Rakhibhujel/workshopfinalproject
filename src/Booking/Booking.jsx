import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  // State to handle the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    place: "Kathmandu", // default place
    date: "",
    time: "",
    guide: "",
    peopleCount: 1,
  });

  // State to hold all submitted bookings
  const [bookings, setBookings] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission to store multiple bookings
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new booking to the bookings list
    setBookings([...bookings, formData]);

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      place: "Kathmandu", // default place
      date: "",
      time: "",
      guide: "",
      peopleCount: 1,
    });
  };

  return (
    <div className="booking">
      <h1>Book Your Trip</h1>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="booking-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </div>

        {/* Place Field */}
        <div className="form-group">
          <label htmlFor="place">Place</label>
          <select
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          >
            <option value="Kathmandu">Kathmandu</option>
            <option value="Paris">Pokhara</option>
            <option value="New York">Rara Lake</option>
            <option value="Tokyo">Mustang</option>
            <option value="Sydney">Shey Phoksundo</option>
          </select>
        </div>

        {/* Guide Field */}
        <div className="form-group">
          <label htmlFor="guide">Select Guide</label>
          <select
            id="guide"
            name="guide"
            value={formData.guide}
            onChange={handleChange}
            required
          >
            <option value="">Choose a guide</option>
            <option value="Raju Malla">Raju Malla</option>
            <option value="Biraj Gurung">Biraj Gurung</option>
            <option value="Bishnu Sunar">Bishnu Sunar</option>
            <option value="Ram Sharma">Ram Sharma</option>{" "}
            <option value="Gokul Adhikari">Gokul Adhikari</option>{" "}
            <option value="Surya Bastola">Surya Bastola</option>
          </select>
        </div>

        {/* Date Field */}
        <div className="form-group">
          <label htmlFor="date">Booking Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Time Field */}
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* Number of People */}
        <div className="form-group">
          <label htmlFor="peopleCount">Number of People</label>
          <input
            type="number"
            id="peopleCount"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit">Submit Booking</button>
        </div>
      </form>

      {/* Display All Submitted Bookings */}
      <div className="booking-list">
        <h2>All Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul>
            {bookings.map((booking, index) => (
              <li key={index} className="booking-item">
                <p>
                  <strong>Name:</strong> {booking.name}
                </p>
                <p>
                  <strong>Email:</strong> {booking.email}
                </p>
                <p>
                  <strong>Place:</strong> {booking.place}
                </p>
                <p>
                  <strong>Guide:</strong> {booking.guide}
                </p>
                <p>
                  <strong>Date:</strong> {booking.date}
                </p>
                <p>
                  <strong>Time:</strong> {booking.time}
                </p>
                <p>
                  <strong>Number of People:</strong> {booking.peopleCount}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Booking;
