import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Chip, LinearProgress } from '@mui/material';
import { Smartphone, Wifi, BatteryFull } from '@mui/icons-material';

const IoTSensors = () => {
  const sensors = [
    { name: 'Soil Moisture Sensor 1', status: 'Online', battery: 85, location: 'Field A' },
    { name: 'Temperature Sensor', status: 'Online', battery: 92, location: 'Greenhouse' },
    { name: 'Weather Station', status: 'Offline', battery: 78, location: 'Main Field' },
    { name: 'Irrigation Monitor', status: 'Online', battery: 65, location: 'Field B' },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          IoT Sensors
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Monitor and manage your farm's IoT sensors and devices.
        </Typography>

        <Grid container spacing={3}>
          {sensors.map((sensor, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardHeader
                  avatar={<Smartphone />}
                  title={sensor.name}
                  subheader={sensor.location}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={sensor.status}
                      color={sensor.status === 'Online' ? 'success' : 'error'}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Wifi color={sensor.status === 'Online' ? 'success' : 'error'} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <BatteryFull sx={{ mr: 1, color: 'success.main' }} />
                    <Typography variant="body2">{sensor.battery}%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={sensor.battery} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default IoTSensors;
