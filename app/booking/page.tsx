"use client";
import React, { useEffect, useState } from "react";

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const getBookings = async() ={
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2024,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log("Error fetching cars: ", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="overflow-hidden">
      <div className="hero">
        <div className="flex-1 pt-28 padding-x">
          <h1 className="text-4xl font-extrabold">Manage Booking</h1>
        </div>
        <div>

        </div>
      </div>
    </main>
  );
  
  // const [newBooking, setNewBooking] = useState({
  //   car: "",
  //   date: "",
  //   customer: "",
  // });
  // useEffect(() => {
  //   const fetchBookings = async () => {
  //     const res = await fetch("/api/bookings");
  //     const data = await res.json();
  //     setBookings(data);
  //     setLoading(false);
  //   };
  //   fetchBookings();
  // }, []);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("/api/bookings", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newBooking),
  //   });
  //   const data = await res.json();
  //   setBookings([...bookings, data]);
  //   setNewBooking({ car: "", date: "", customer: "" });
  // };
  // if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>Manage Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.customer} booked {booking.car} on {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
