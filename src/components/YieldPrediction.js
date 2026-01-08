import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  LinearProgress,
  Alert,
  AlertTitle,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  Stack,
  IconButton,
  CircularProgress,
} from '@mui/material';
import {
  TrendingUp,
  Assessment,
  Analytics,
  Timeline,
  PieChart,
  BarChart,
  ShowChart,
  ExpandMore,
  Info,
  Warning,
  CheckCircle,
  Error,
  Refresh,
  Download,
  Share,
  FilterList,
  Search,
  Add,
  WbSunny,
  Opacity,
  Cloud,
} from '@mui/icons-material';
import Layout from './Layout';

const YieldPrediction = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [cropType, setCropType] = useState('corn');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/weather?lat=0&lon=0');
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Calculate yield predictions based on weather and crop type
  const getYieldData = () => {
    const baseYields = {
      corn: { base: 2850, weatherFactor: 1.0 },
      wheat: { base: 1950, weatherFactor: 1.0 },
      soybeans: { base: 1200, weatherFactor: 1.0 },
      tomatoes: { base: 850, weatherFactor: 1.0 }
    };

    if (!weatherData) return [];

    const { temperature, humidity, precipitation, forecast } = weatherData;
    const avgTemp = temperature;
    const avgHumidity = humidity;
    const totalPrecip = precipitation + (forecast?.reduce((sum, day) => sum + (day.precipitation || 0), 0) || 0) / 4;

    return Object.entries(baseYields).map(([crop, data]) => {
      let adjustment = 0;
      let confidence = 'High';

      // Temperature impact
      if (avgTemp < 15 || avgTemp > 35) {
        adjustment -= 0.15;
        confidence = 'Medium';
      } else if (avgTemp >= 20 && avgTemp <= 30) {
        adjustment += 0.1;
      }

      // Humidity impact
      if (avgHumidity < 40 || avgHumidity > 90) {
        adjustment -= 0.1;
        confidence = 'Medium';
      } else if (avgHumidity >= 50 && avgHumidity <= 80) {
        adjustment += 0.05;
      }

      // Precipitation impact
      if (totalPrecip < 50) {
        adjustment -= 0.2;
        confidence = 'Low';
      } else if (totalPrecip > 150) {
        adjustment -= 0.1;
        confidence = 'Medium';
      } else if (totalPrecip >= 75 && totalPrecip <= 125) {
        adjustment += 0.08;
      }

      // Crop-specific adjustments
      if (crop === cropType) {
        adjustment += 0.05; // Bonus for selected crop
      }

      const adjustedYield = Math.round(data.base * (1 + adjustment));
      const changePercent = Math.round(adjustment * 100);

      return {
        crop: crop.charAt(0).toUpperCase() + crop.slice(1),
        forecast: `${adjustedYield.toLocaleString()} tons`,
        change: `${changePercent >= 0 ? '+' : ''}${changePercent}%`,
        confidence
      };
    });
  };

  const yieldData = getYieldData();

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High': return 'success';
      case 'Medium': return 'warning';
      case 'Low': return 'error';
      default: return 'default';
    }
  };

  return (
    <Layout activeItem="Yield Prediction">
      <Box sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Yield Prediction
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Advanced predictive analytics for crop yields. Use AI-powered models to forecast harvest outcomes and optimize planning.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button variant="contained" startIcon={<Refresh />} onClick={() => setLoading(true)}>
            Run Prediction Model
          </Button>
          <Button variant="outlined" startIcon={<Download />}>
            Export Forecasts
          </Button>
          <Button variant="outlined" startIcon={<Share />}>
            Share Predictions
          </Button>
          <Button variant="outlined" startIcon={<FilterList />}>
            Adjust Parameters
          </Button>
        </Stack>

        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Current Forecasts" />
          <Tab label="Model Analysis" />
          <Tab label="Historical Accuracy" />
          <Tab label="Scenario Planning" />
        </Tabs>

        {tabValue === 0 && (
          <Grid container spacing={3}>
            {yieldData.slice(0, 2).map((crop, index) => (
              <Grid item xs={12} md={6} key={crop.crop}>
                <Card>
                  <CardHeader
                    title={`${crop.crop} Yield Forecast`}
                    avatar={index === 0 ? <TrendingUp /> : <Assessment />}
                    action={
                      <IconButton>
                        <Info />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1 }}>Expected: {crop.forecast}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {crop.change} from last season
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={crop.confidence === 'High' ? 85 : crop.confidence === 'Medium' ? 65 : 45}
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      Confidence: {crop.confidence}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title="Yield Forecast Summary"
                  avatar={<BarChart />}
                />
                <CardContent>
                  <TableContainer component={Paper} elevation={0}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Crop</TableCell>
                          <TableCell>Forecasted Yield</TableCell>
                          <TableCell>Change</TableCell>
                          <TableCell>Confidence</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {yieldData.map((row) => (
                          <TableRow key={row.crop}>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                                  {row.crop[0]}
                                </Avatar>
                                {row.crop}
                              </Box>
                            </TableCell>
                            <TableCell>{row.forecast}</TableCell>
                            <TableCell>
                              <Chip
                                label={row.change}
                                color={row.change.startsWith('+') ? 'success' : 'error'}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={row.confidence}
                                color={getConfidenceColor(row.confidence)}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>
                              <IconButton size="small">
                                <Timeline />
                              </IconButton>
                              <IconButton size="small">
                                <PieChart />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {tabValue === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Prediction Model Analysis" avatar={<ShowChart />} />
                <CardContent>
                  <Alert severity="info" sx={{ mb: 3 }}>
                    <AlertTitle>AI-Powered Forecasting</AlertTitle>
                    Our machine learning models analyze weather patterns, soil data, historical yields, and market trends to provide accurate predictions.
                  </Alert>
                  <Typography variant="h6" gutterBottom>
                    Model Performance Metrics
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Accuracy Rate"
                        secondary="92% average accuracy across all crops"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUp color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Data Sources"
                        secondary="Weather APIs, IoT sensors, satellite imagery, historical data"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <Warning color="warning" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Model Limitations"
                        secondary="Predictions may vary with unexpected weather events"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {tabValue === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Historical Accuracy" avatar={<Assessment />} />
                <CardContent>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Last Season Performance</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Corn: Predicted 2,480 tons, Actual 2,520 tons (98.4% accuracy)
                        <br />
                        Wheat: Predicted 1,800 tons, Actual 1,820 tons (98.9% accuracy)
                        <br />
                        Soybeans: Predicted 1,250 tons, Actual 1,220 tons (97.6% accuracy)
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>5-Year Average</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Overall Accuracy: 94.2%
                        <br />
                        Best Performing: Wheat (96.1%)
                        <br />
                        Areas for Improvement: Extreme weather event predictions
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Model Updates" avatar={<Refresh />} />
                <CardContent>
                  <Alert severity="success" sx={{ mb: 2 }}>
                    <AlertTitle>Latest Update</AlertTitle>
                    Model retrained with 2023 data. Accuracy improved by 2.1%.
                  </Alert>
                  <Button variant="contained" fullWidth>
                    View Update History
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {tabValue === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Scenario Planning" avatar={<Timeline />} />
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Explore different scenarios to understand potential outcomes and make informed decisions.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <Typography variant="h6">Scenario modeling tools would be displayed here</Typography>
                    )}
                  </Box>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" startIcon={<Search />}>
                      Create Scenario
                    </Button>
                    <Button variant="outlined" startIcon={<Add />}>
                      Compare Scenarios
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Layout>
  );
};

export default YieldPrediction;
