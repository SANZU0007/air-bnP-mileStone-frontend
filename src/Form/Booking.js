import React, { useState } from 'react';
import axios from 'axios';
import "./Book.css";
import { useNavigate } from 'react-router-dom'; 
import { Button } from '@mui/material';


const BookRoomForm = () => {
  const [roomId, setRoomId] = useState('');
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://air-bnbwq.onrender.com/api/bookRoom', {
        roomId,
        guestName,
        checkInDate,
        checkOutDate,
      });

      setMessage(response.data.message);

      console.log(response.data)
      window.alert("success booked__thank you")
      navigate('/');
    } catch (error) {
      console.error('Axios Error:', error);
      setMessage('An error occurred while booking the room.');
    }
  };

  return (
    <div>
     
      <h2 id='book-room' >Book a Room</h2>
      <Button variant="contained" color="primary" onClick={() => navigate('/search')}>
  Click to Find Room ID
</Button>n
<br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Guest Name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
        <button type="submit">Book Room</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default BookRoomForm;
