import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [duration, setDuration] = useState("false");
  const [details, setDetails] = useState("");
  const [facility, setFacility] = useState("");  // Facility state

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Booking details:", { startDate, duration, details, facility });
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Booking Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Duration (in hours)"
              type="number"
              fullWidth
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Booking Details"
              fullWidth
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Select Booking Date and Time
            </Typography>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              customInput={
                <TextField
                  fullWidth
                  value={startDate ? startDate.toLocaleString() : ''}
                  label="Select Date and Time"
                  onClick={(e) => e.preventDefault()}  // Prevent form submission on click
                />
              }
            />
          </Grid>
          
          {/* Facility Selection */}
          <Grid item xs={15} sm={10}>
            <FormControl fullWidth required>
              <InputLabel>Facility</InputLabel>
              <Select
                value={facility}
                onChange={(e) => setFacility(e.target.value)}
                label="Facility"
              >
                <MenuItem value="Conference Room">Conference Room</MenuItem>
                <MenuItem value="Meeting Room">Meeting Room</MenuItem>
                <MenuItem value="Event Hall">Event Hall</MenuItem>
                <MenuItem value="Parking Space">Parking Space</MenuItem>
                {/* Add more facility options as needed */}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button variant="contained" type="submit" fullWidth>
              Submit Booking
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default BookingForm;


