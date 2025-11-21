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

const CropAnalytics = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const cropData = [
    { crop: 'Corn', yield: '2,850 tons', change: '+12%', status: 'excellent' },
    { crop: 'Wheat', yield: '1,950 tons', change: '+8%', status: 'good' },
    { crop: 'Soybeans', yield: '1,200 tons', change: '-3%', status: 'warning' },
    { crop: 'Tomatoes', yield: '850 tons', change: '+15%', status: 'excellent' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'success';
      case 'good': return 'primary';
      case 'warning': return 'warning';
      case 'danger': return 'error';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent': return <CheckCircle />;
      case 'good': return <Info />;
      case 'warning': return <Warning />;
      case 'danger': return <Error />;
      default: return <Info />;
    }
  };

  return (
    <Layout activeItem="Crop Analytics">
      <Box sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Crop Analytics
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Comprehensive analytics and insights for your crops. Monitor performance, track trends, and optimize yields.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button variant="contained" startIcon={<Refresh />} onClick={() => setLoading(true)}>
            Refresh Data
          </Button>
          <Button variant="outlined" startIcon={<Download />}>
            Export Report
          </Button>
          <Button variant="outlined" startIcon={<Share />}>
            Share Insights
          </Button>
          <Button variant="outlined" startIcon={<FilterList />}>
            Advanced Filters
          </Button>
        </Stack>

        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Overview" />
          <Tab label="Yield Analysis" />
          <Tab label="Performance Metrics" />
          <Tab label="Historical Data" />
        </Tabs>

        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Yield Trends"
                  avatar={<TrendingUp />}
                  action={
                    <IconButton>
                      <Info />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Current Season Overview
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Analyze historical and predicted yield data across all crops.
                  </Typography>
                  <LinearProgress variant="determinate" value={75} sx={{ mb: 1 }} />
                  <Typography variant="caption" color="text.secondary">
                    75% of expected yield achieved
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Performance Metrics"
                  avatar={<Assessment />}
                  action={
                    <IconButton>
                      <Analytics />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Key Indicators
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Comprehensive performance indicators for crop health and productivity.
                  </Typography>
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Soil Health</Typography>
                      <Chip label="Good" color="success" size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Water Usage</Typography>
                      <Chip label="Optimal" color="primary" size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Pest Control</Typography>
                      <Chip label="Excellent" color="success" size="small" />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title="Crop Performance Summary"
                  avatar={<BarChart />}
                />
                <CardContent>
                  <TableContainer component={Paper} elevation={0}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Crop</TableCell>
                          <TableCell>Current Yield</TableCell>
                          <TableCell>Change</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cropData.map((row) => (
                          <TableRow key={row.crop}>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                                  {row.crop[0]}
                                </Avatar>
                                {row.crop}
                              </Box>
                            </TableCell>
                            <TableCell>{row.yield}</TableCell>
                            <TableCell>
                              <Chip
                                label={row.change}
                                color={row.change.startsWith('+') ? 'success' : 'error'}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>
                              <Chip
                                icon={getStatusIcon(row.status)}
                                label={row.status}
                                color={getStatusColor(row.status)}
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
                <CardHeader title="Yield Analysis Dashboard" avatar={<ShowChart />} />
                <CardContent>
                  <Alert severity="info" sx={{ mb: 3 }}>
                    <AlertTitle>Yield Prediction Model</AlertTitle>
                    Our AI-powered model predicts yields based on historical data, weather patterns, and soil conditions.
                  </Alert>
                  <Typography variant="h6" gutterBottom>
                    Detailed Yield Breakdown
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUp color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Corn Yield Projection"
                        secondary="Expected: 2,850 tons (+12% from last season)"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUp color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Wheat Yield Projection"
                        secondary="Expected: 1,950 tons (+8% from last season)"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <Warning color="warning" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Soybean Yield Projection"
                        secondary="Expected: 1,200 tons (-3% from last season)"
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
                <CardHeader title="Performance Metrics" avatar={<Assessment />} />
                <CardContent>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Soil Health Metrics</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        pH Level: 6.8 (Optimal range: 6.0-7.0)
                        <br />
                        Nutrient Levels: Nitrogen 45%, Phosphorus 32%, Potassium 28%
                        <br />
                        Organic Matter: 3.2%
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Water Management</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Current Usage: 2.3 liters/day per plant
                        <br />
                        Efficiency Rating: 92%
                        <br />
                        Irrigation Schedule: Automated
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Alerts & Recommendations" avatar={<Warning />} />
                <CardContent>
                  <Alert severity="warning" sx={{ mb: 2 }}>
                    <AlertTitle>Attention Required</AlertTitle>
                    Soybean field showing signs of nutrient deficiency. Consider applying fertilizer.
                  </Alert>
                  <Alert severity="success" sx={{ mb: 2 }}>
                    <AlertTitle>Good News</AlertTitle>
                    Corn field irrigation system operating optimally.
                  </Alert>
                  <Button variant="contained" fullWidth>
                    View All Recommendations
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
                <CardHeader title="Historical Data Analysis" avatar={<Timeline />} />
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Review past performance data to identify trends and optimize future yields.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <Typography variant="h6">Historical charts would be displayed here</Typography>
                    )}
                  </Box>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" startIcon={<Search />}>
                      Search Records
                    </Button>
                    <Button variant="outlined" startIcon={<Add />}>
                      Add New Data
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

export default CropAnalytics;
