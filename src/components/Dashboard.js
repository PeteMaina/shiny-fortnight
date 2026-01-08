import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import {
  WbSunny,
  Opacity,
  Grass,
  Brightness6,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({
  location,
  cropType,
  onSetCropType,
  onSetLocation,
}) => {
  const navigate = useNavigate();
  // Removed unused state: mobileOpen, menuAnchor, etc.

  // Keep relevant state
  const [realTimeData, setRealTimeData] = useState({
    temperature: 24,
    humidity: 65,
    soilMoisture: 78,
    lightLevel: 85
  });

  // Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const lat = location?.lat || 40.7128;
        const lon = location?.lon || -74.0060;
        const response = await fetch(`http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`);
        if (response.ok) {
          const data = await response.json();
          // setWeatherData(data); // Unused local state?
          // Update realTimeData with actual weather data
          setRealTimeData(prev => ({
            ...prev,
            temperature: data.temperature,
            humidity: data.humidity
          }));
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [location]);

  // Simulate real-time data updates for non-weather sensors
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        soilMoisture: prev.soilMoisture + (Math.random() - 0.5) * 3,
        lightLevel: prev.lightLevel + (Math.random() - 0.5) * 4
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCropTypeChange = (event) => {
    onSetCropType(event.target.value);
  };

  const handleLocationChange = (event) => {
    onSetLocation(event.target.value);
  };

  return (
    <Box>
      {/* Welcome Section */}
      <Fade in timeout={1000}>
        <Box sx={{ mb: 4 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'start', md: 'center' }} spacing={2}>
            <Box>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, color: 'primary.main' }}>
                Welcome back, Farmer!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Here's what's happening on your farm today. Last updated: {new Date().toLocaleTimeString()}
              </Typography>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: { xs: '100%', md: 'auto' } }}>
              {/* Crop Type Selector */}
              <Box sx={{ minWidth: 200 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="crop-type-label">Select Crop Type</InputLabel>
                  <Select
                    labelId="crop-type-label"
                    value={cropType}
                    label="Select Crop Type"
                    onChange={handleCropTypeChange}
                  >
                    <MenuItem value="corn">Corn</MenuItem>
                    <MenuItem value="wheat">Wheat</MenuItem>
                    <MenuItem value="tomatoes">Tomatoes</MenuItem>
                    <MenuItem value="soybeans">Soybeans</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Location Input */}
              <Box sx={{ minWidth: 200 }}>
                <TextField
                  label="Set Location"
                  value={location || ''}
                  placeholder="Enter location"
                  onChange={handleLocationChange}
                  fullWidth
                  size="small"
                />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Fade>

      {/* Real-time Environmental Data */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { label: 'Temperature', value: `${realTimeData.temperature.toFixed(1)}°C`, icon: <WbSunny />, color: 'warning' },
          { label: 'Humidity', value: `${realTimeData.humidity.toFixed(0)}%`, icon: <Opacity />, color: 'info' },
          { label: 'Soil Moisture', value: `${realTimeData.soilMoisture.toFixed(0)}%`, icon: <Grass />, color: 'success' },
          { label: 'Light Level', value: `${realTimeData.lightLevel.toFixed(0)}%`, icon: <Brightness6 />, color: 'primary' }
        ].map((sensor, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Avatar sx={{ bgcolor: `${sensor.color}.light`, color: `${sensor.color}.main` }}>
                    {sensor.icon}
                  </Avatar>
                  <Typography variant="subtitle1" fontWeight={600} color="text.secondary">{sensor.label}</Typography>
                </Stack>
                <Typography variant="h3" fontWeight={700} color="text.primary">
                  {sensor.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 
          Additional Dashboard Widgets could go here. 
          The original file had many unused variables suggesting more content was planned 
          but not rendered in the main return block I saw.
          For now, this cleans up the existing functional parts.
      */}
    </Box>
  );
};

export default Dashboard;
