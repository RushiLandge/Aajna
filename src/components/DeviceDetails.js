import React from 'react';
import { Container, TextField, Button, Box, MenuItem,Grid} from '@mui/material';
import GridLayout from './layout/Grid'; // Import GridLayout component
import "../styles/DeviceDetails.css"; // Import your CSS

const DeviceForm = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      {/* Fuel Info Section */}
      <Box my={4} p={2} boxShadow={2} borderRadius={2}>
        <h2>Fuel Info</h2>
        <GridLayout>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth select label="Fuel Type" variant="outlined">
              <MenuItem value="Diesel">Diesel</MenuItem>
              <MenuItem value="Petrol">Petrol</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Fuel Price" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Fuel Capacity" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Vehicle Mileage" variant="outlined" />
          </Grid>
        </GridLayout>
      </Box>

      {/* SIM Info Section */}
      <Box my={4} p={2} boxShadow={2} borderRadius={2}>
        <h2>SIM Info</h2>
        <GridLayout>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="SIM Number" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="SIM Id" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="SIM Operator" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="SIM Activation" variant="outlined" placeholder="dd-mm-yyyy" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="SIM Expiration" variant="outlined" placeholder="dd-mm-yyyy" />
          </Grid>
        </GridLayout>
      </Box>

      {/* Attributes Section */}
      <Box my={4} p={2} boxShadow={2} borderRadius={2}>
        <h2>Attributes</h2>
        <GridLayout>
          <Grid item xs={12}>
            <TextField fullWidth label="Speed Limit (km/h)" variant="outlined" defaultValue="80.00" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">+ Add</Button>
          </Grid>
        </GridLayout>
      </Box>

      {/* Save/Cancel Buttons */}
      <GridLayout>
        <Grid item>
          <Button variant="contained" color="secondary">Cancel</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">Save</Button>
        </Grid>
      </GridLayout>
    </Container>
  );
}

export default DeviceForm;