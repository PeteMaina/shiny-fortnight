import React, { useState } from 'react';
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  Switch,
  FormControlLabel,
  useTheme,
  useMediaQuery,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Opacity as WaterDrop, PlayArrow, Stop, Schedule } from '@mui/icons-material';

const irrigationSystemsInfo = {
  drip: {
    description: 'Efficient water delivery directly to plant roots, ideal for water conservation.',
    suitableRegions: ['Arid', 'Semi-Arid', 'Mediterranean'],
  },
  sprinkler: {
    description: 'Simulates rainfall, suitable for varied terrains.',
    suitableRegions: ['Temperate', 'Tropical', 'Continental'],
  },
  flood: {
    description: 'Traditional method for rice paddies and flat fields.',
    suitableRegions: ['Tropical', 'Subtropical'],
  },
  default: {
    description: 'Select a system for optimal irrigation management.',
    suitableRegions: [],
  },
};

const IrrigationControl = ({ location, cropType = 'default' }) => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [autoIrrigation, setAutoIrrigation] = useState(true);
  const [selectedSystem, setSelectedSystem] = useState('drip');

  const systemInfo = irrigationSystemsInfo[selectedSystem] || irrigationSystemsInfo.default;

  return (
    <Container maxWidth="xl" sx={{ pb: 4 }}>
      <Box sx={{ mt: 4 }}>
        <Typography variant={isSmDown ? 'h5' : 'h4'} gutterBottom>
          Irrigation Control
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Manage and automate irrigation systems for {cropType} crops{location ? ` in ${location}` : ''}.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="System Status"
                avatar={<WaterDrop />}
              />
              <CardContent>
                <FormControlLabel
                  control={
                    <Switch
                      checked={autoIrrigation}
                      onChange={(e) => setAutoIrrigation(e.target.checked)}
                      inputProps={{ 'aria-label': 'Toggle Auto Irrigation' }}
                    />
                  }
                  label="Auto Irrigation"
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="irrigation-system-label">Irrigation System</InputLabel>
                  <Select
                    labelId="irrigation-system-label"
                    value={selectedSystem}
                    label="Irrigation System"
                    onChange={(e) => setSelectedSystem(e.target.value)}
                  >
                    <MenuItem value="drip">Drip Irrigation</MenuItem>
                    <MenuItem value="sprinkler">Sprinkler System</MenuItem>
                    <MenuItem value="flood">Flood Irrigation</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {systemInfo.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Suitable Regions: {systemInfo.suitableRegions.join(', ') || 'N/A'}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" startIcon={<PlayArrow />} sx={{ mr: 1 }}>
                    Start
                  </Button>
                  <Button variant="outlined" startIcon={<Stop />}>
                    Stop
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Water Usage"
                avatar={<WaterDrop />}
              />
              <CardContent>
                <Typography variant="h6">Current Usage: 1,230 L</Typography>
                <Typography variant="body2" color="text.secondary">
                  Monitor water consumption and efficiency.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default IrrigationControl;
