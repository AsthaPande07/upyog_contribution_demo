import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, CircularProgress, Box } from "@mui/material";
import axios from 'axios';
import FacilitySelection from './components/FacilitySelection';
import BookingForm from './components/BookingForm';

const App = () => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/api/facilities")
      .then((response) => {
        setFacilities(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the facilities!", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Top Banner Section */}
      <Box
  sx={{
    width: '100%',
    height: '60vh',
    backgroundImage: 'url("/Technologi GoDaddy Store Image.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
  }}
>
  <Box sx={{ marginTop: '60px' }}> {/* Yeh line text ko thoda niche karega */}
    <Typography variant="h2" align="center">
      UPYOG Community Facility Booking
    </Typography>
  </Box>
</Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ paddingY: 4 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FacilitySelection facilities={facilities} />
            </Grid>
            <Grid item xs={12}>
              <BookingForm />
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default App;




