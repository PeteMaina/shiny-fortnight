import React, { useState } from 'react';
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
} from '@mui/icons-material';
import Layout from './Layout';

const YieldPrediction = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const yieldData = [
    { crop: 'Corn', forecast: '2,850 tons', change: '+12%', confidence: 'High' },
    { crop: 'Wheat', forecast: '1,950 tons', change: '+8%', confidence: 'High' },
    { crop: 'Soybeans', forecast: '1,200 tons', change: '-3%', confidence: 'Medium' },
    { crop: 'Tomatoes', forecast: '850 tons', change: '+15%', confidence: 'High' },
  ];

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
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Corn Yield Forecast"
                  avatar={<TrendingUp />}
                  action={
                    <IconButton>
                      <Info />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>Expected: 2,850 tons</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    +12% increase from last season
                  </Typography>
                  <LinearProgress variant="determinate" value={85} sx={{ mb: 1 }} />
                  <Typography variant="caption" color="text.secondary">
                    Confidence: 85%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Wheat Yield Forecast"
                  avatar={<Assessment />}
                  action={
                    <IconButton>
                      <Analytics />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>Expected: 1,950 tons</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    +8% increase from last season
                  </Typography>
                  <LinearProgress variant="determinate" value={78} sx={{ mb: 1 }} />
                  <Typography variant="caption" color="text.secondary">
                    Confidence: 78%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
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
