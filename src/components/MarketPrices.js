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
  TrendingDown,
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

const MarketPrices = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const priceData = [
    { commodity: 'Corn', price: '$4.25/bushel', change: '+2.4%', trend: 'up' },
    { commodity: 'Wheat', price: '$5.10/bushel', change: '-1.2%', trend: 'down' },
    { commodity: 'Soybeans', price: '$12.80/bushel', change: '+1.8%', trend: 'up' },
    { commodity: 'Rice', price: '$15.50/cwt', change: '+0.5%', trend: 'up' },
  ];

  const getTrendIcon = (trend) => {
    return trend === 'up' ? <TrendingUp color="success" /> : <TrendingDown color="error" />;
  };

  const getChangeColor = (change) => {
    return change.startsWith('+') ? 'success' : 'error';
  };

  return (
    <Layout activeItem="Market Prices">
      <Box sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Market Prices
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Real-time market prices, trends, and analysis for agricultural commodities. Stay informed with the latest pricing data.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button variant="contained" startIcon={<Refresh />} onClick={() => setLoading(true)}>
            Update Prices
          </Button>
          <Button variant="outlined" startIcon={<Download />}>
            Export Data
          </Button>
          <Button variant="outlined" startIcon={<Share />}>
            Share Insights
          </Button>
          <Button variant="outlined" startIcon={<FilterList />}>
            Price Alerts
          </Button>
        </Stack>

        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Current Prices" />
          <Tab label="Price Trends" />
          <Tab label="Market Analysis" />
          <Tab label="Price Alerts" />
        </Tabs>

        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Corn Price"
                  avatar={<TrendingUp />}
                  action={
                    <IconButton>
                      <Info />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>$4.25 per bushel</Typography>
                  <Typography variant="body2" color="success.main">
                    +2.4% from last week
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Wheat Price"
                  avatar={<TrendingDown />}
                  action={
                    <IconButton>
                      <Analytics />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>$5.10 per bushel</Typography>
                  <Typography variant="body2" color="error.main">
                    -1.2% from last week
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title="Commodity Price Overview"
                  avatar={<BarChart />}
                />
                <CardContent>
                  <TableContainer component={Paper} elevation={0}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Commodity</TableCell>
                          <TableCell>Current Price</TableCell>
                          <TableCell>Weekly Change</TableCell>
                          <TableCell>Trend</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {priceData.map((row) => (
                          <TableRow key={row.commodity}>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                                  {row.commodity[0]}
                                </Avatar>
                                {row.commodity}
                              </Box>
                            </TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>
                              <Chip
                                label={row.change}
                                color={getChangeColor(row.change)}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>
                              {getTrendIcon(row.trend)}
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
                <CardHeader title="Price Trends Analysis" avatar={<ShowChart />} />
                <CardContent>
                  <Alert severity="info" sx={{ mb: 3 }}>
                    <AlertTitle>Market Trend Insights</AlertTitle>
                    Analyze historical price movements and identify patterns to make informed trading decisions.
                  </Alert>
                  <Typography variant="h6" gutterBottom>
                    Recent Price Movements
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUp color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Corn Prices Rising"
                        secondary="Up 2.4% this week due to strong export demand"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <TrendingDown color="error" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Wheat Prices Declining"
                        secondary="Down 1.2% due to increased global supply"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUp color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Soybean Prices Stable"
                        secondary="Up 1.8% with steady demand from processing industry"
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
                <CardHeader title="Market Analysis" avatar={<Assessment />} />
                <CardContent>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Supply & Demand Factors</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Global corn production: Expected to increase by 3%
                        <br />
                        Export demand: Strong from China and Mexico
                        <br />
                        Weather impact: Favorable conditions in major growing regions
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Economic Indicators</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        USD strength: Affecting export competitiveness
                        <br />
                        Ethanol demand: Supporting corn prices
                        <br />
                        Livestock feed costs: Influencing buyer decisions
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Market Outlook" avatar={<Warning />} />
                <CardContent>
                  <Alert severity="warning" sx={{ mb: 2 }}>
                    <AlertTitle>Price Volatility Alert</AlertTitle>
                    Corn prices showing increased volatility. Monitor closely for trading opportunities.
                  </Alert>
                  <Alert severity="success" sx={{ mb: 2 }}>
                    <AlertTitle>Positive Outlook</AlertTitle>
                    Wheat fundamentals remain strong with tight global supplies.
                  </Alert>
                  <Button variant="contained" fullWidth>
                    View Full Report
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
                <CardHeader title="Price Alert Settings" avatar={<Timeline />} />
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Set up custom price alerts to stay informed about market movements.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <Typography variant="h6">Alert configuration tools would be displayed here</Typography>
                    )}
                  </Box>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" startIcon={<Search />}>
                      Create Alert
                    </Button>
                    <Button variant="outlined" startIcon={<Add />}>
                      Manage Alerts
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

export default MarketPrices;
