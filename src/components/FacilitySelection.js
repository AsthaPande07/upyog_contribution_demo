import React from 'react';
import { Paper, Grid, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";


const FacilitySelection = ({ facilities }) => {
  const [selectedFacility, setSelectedFacility] = React.useState('');

  const handleFacilityChange = (event) => {
    setSelectedFacility(event.target.value);
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Select a Facility
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="facility-select-label">Facility</InputLabel>
        <Select
          labelId="facility-select-label"
          value={selectedFacility}
          label="Facility"
          onChange={handleFacilityChange}
        >
          {facilities.map((facility) => (
            <MenuItem key={facility.id} value={facility.id}>
              {facility.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default FacilitySelection;

