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
  BugReport,
  Warning,
  CheckCircle,
  TrendingUp,
  Assessment,
  Analytics,
  Timeline,
  PieChart,
  ExpandMore,
  Info,
  Error,
  Refresh,
  Download,
  Share,
  FilterList,
  Search,
  Add,
} from '@mui/icons-material';
import Layout from './Layout';

const PestControl = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const pestData = [
    { pest: 'Aphids', field: 'Tomato Field A', severity: 'High', status: 'Active' },
    { pest: 'Corn Borer', field: 'Corn Field B', severity: 'Medium', status: 'Monitored' },
    { pest: 'Spider Mites', field: 'Soybean Field C', severity: 'Low', status: 'Resolved' },
    { pest: 'Cutworms', field: 'Wheat Field D', severity: 'High', status: 'Active' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'error';
      case 'Monitored': return 'warning';
      case 'Resolved': return 'success';
      default: return 'default';
    }
  };

  return (
    <Layout activeItem="Pest Control">
      <Box sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Pest Control
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Comprehensive pest monitoring and management system. Detect, analyze, and control pest threats effectively.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button variant="contained" startIcon={<Refresh />} onClick={() => setLoading(true)}>
            Scan Fields
          </Button>
          <Button variant="outlined" startIcon={<Download />}>
            Export Report
          </Button>
          <Button variant="outlined" startIcon={<Share />}>
            Share Alerts
          </Button>
          <Button variant="outlined" startIcon={<FilterList />}>
            Advanced Filters
          </Button>
        </Stack>

        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Current Threats" />
          <Tab label="Detection History" />
          <Tab label="Prevention Strategies" />
          <Tab label="Treatment Plans" />
        </Tabs>

        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Active Pest Threats"
                  avatar={<BugReport />}
                  action={
                    <IconButton>
                      <Info />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Current Field Status
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Real-time monitoring of pest activity across all fields.
                  </Typography>
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Tomato Field A</Typography>
                      <Chip label="Aphids Detected" color="error" size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Corn Field B</Typography>
                      <Chip label="Corn Borer" color="warning" size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Soybean Field C</Typography>
                      <Chip label="Spider Mites" color="warning" size="small" />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Prevention Measures"
                  avatar={<CheckCircle />}
                  action={
                    <IconButton>
                      <Analytics />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Active Protection
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Implemented preventive measures and monitoring protocols.
                  </Typography>
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Companion Planting</Typography>
                      <Chip label="Active" color="success" size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Biological Control</Typography>
                      <Chip label="Scheduled" color="primary" size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Trap Monitoring</Typography>
                      <Chip label="Daily" color="info" size="small" />
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title="Pest Detection Summary"
                  avatar={<Assessment />}
                />
                <CardContent>
                  <TableContainer component={Paper} elevation={0}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Pest Type</TableCell>
                          <TableCell>Field</TableCell>
                          <TableCell>Severity</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pestData.map((row) => (
                          <TableRow key={row.pest}>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'error.main' }}>
                                  {row.pest[0]}
                                </Avatar>
                                {row.pest}
                              </Box>
                            </TableCell>
                            <TableCell>{row.field}</TableCell>
                            <TableCell>
                              <Chip
                                label={row.severity}
                                color={getSeverityColor(row.severity)}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>
                              <Chip
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
                <CardHeader title="Detection History" avatar={<Timeline />} />
                <CardContent>
                  <Alert severity="info" sx={{ mb: 3 }}>
                    <AlertTitle>Pest Detection Timeline</AlertTitle>
                    Historical data shows seasonal patterns in pest activity. Use this information to optimize prevention strategies.
                  </Alert>
                  <Typography variant="h6" gutterBottom>
                    Recent Detections
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <BugReport color="error" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Aphids in Tomato Field A"
                        secondary="Detected: 2 days ago | Severity: High | Action: Treatment initiated"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <Warning color="warning" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Corn Borer in Corn Field B"
                        secondary="Detected: 5 days ago | Severity: Medium | Action: Monitoring"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Spider Mites in Soybean Field C"
                        secondary="Detected: 1 week ago | Severity: Low | Action: Resolved"
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
                <CardHeader title="Prevention Strategies" avatar={<CheckCircle />} />
                <CardContent>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Biological Control Methods</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Introduce beneficial insects like ladybugs and lacewings.
                        <br />
                        Use parasitic wasps for aphid control.
                        <br />
                        Implement predatory mites for spider mite management.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Cultural Practices</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Crop rotation to break pest life cycles.
                        <br />
                        Plant resistant varieties.
                        <br />
                        Maintain proper field sanitation.
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
                    <AlertTitle>High Risk Alert</AlertTitle>
                    Aphid population in Tomato Field A exceeds threshold. Immediate treatment recommended.
                  </Alert>
                  <Alert severity="info" sx={{ mb: 2 }}>
                    <AlertTitle>Maintenance Reminder</AlertTitle>
                    Check pheromone traps in all fields. Replace as needed.
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
                <CardHeader title="Treatment Plans" avatar={<TrendingUp />} />
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Customized treatment plans based on pest type, severity, and environmental factors.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <Typography variant="h6">Treatment plan generation in progress...</Typography>
                    )}
                  </Box>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" startIcon={<Search />}>
                      Search Treatments
                    </Button>
                    <Button variant="outlined" startIcon={<Add />}>
                      Create New Plan
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

export default PestControl;
