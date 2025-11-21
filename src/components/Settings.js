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
  Switch,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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
  Settings as SettingsIcon,
  Security,
  Notifications,
  AccountCircle,
  Palette,
  Language,
  Storage,
  Backup,
  Restore,
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

const Settings = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleNotificationChange = (type) => (event) => {
    setNotifications({
      ...notifications,
      [type]: event.target.checked,
    });
  };

  return (
    <Layout activeItem="Settings">
      <Box sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Comprehensive settings management for your farm management system. Customize your experience and preferences.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button variant="contained" startIcon={<Refresh />} onClick={() => setLoading(true)}>
            Save Changes
          </Button>
          <Button variant="outlined" startIcon={<Download />}>
            Export Settings
          </Button>
          <Button variant="outlined" startIcon={<Share />}>
            Share Configuration
          </Button>
          <Button variant="outlined" startIcon={<FilterList />}>
            Reset to Defaults
          </Button>
        </Stack>

        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Account" />
          <Tab label="Notifications" />
          <Tab label="Appearance" />
          <Tab label="Security" />
          <Tab label="Data Management" />
        </Tabs>

        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Profile Information"
                  avatar={<AccountCircle />}
                  action={
                    <IconButton>
                      <Info />
                    </IconButton>
                  }
                />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Full Name"
                    defaultValue="John Doe"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue="john.doe@example.com"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    defaultValue="+1 (555) 123-4567"
                    sx={{ mb: 2 }}
                  />
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Time Zone</InputLabel>
                    <Select defaultValue="EST">
                      <MenuItem value="EST">Eastern Standard Time</MenuItem>
                      <MenuItem value="CST">Central Standard Time</MenuItem>
                      <MenuItem value="PST">Pacific Standard Time</MenuItem>
                    </Select>
                  </FormControl>
                  <Button variant="contained" fullWidth>
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  title="Farm Details"
                  avatar={<CheckCircle />}
                  action={
                    <IconButton>
                      <Info />
                    </IconButton>
                  }
                />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Farm Name"
                    defaultValue="Green Valley Farms"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Location"
                    defaultValue="Iowa, USA"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Farm Size"
                    defaultValue="500 acres"
                    sx={{ mb: 2 }}
                  />
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Crop Types</InputLabel>
                    <Select defaultValue="corn">
                      <MenuItem value="corn">Corn</MenuItem>
                      <MenuItem value="wheat">Wheat</MenuItem>
                      <MenuItem value="soybeans">Soybeans</MenuItem>
                    </Select>
                  </FormControl>
                  <Button variant="outlined" fullWidth>
                    Update Farm Info
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {tabValue === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Notification Preferences" avatar={<Notifications />} />
                <CardContent>
                  <Alert severity="info" sx={{ mb: 3 }}>
                    <AlertTitle>Stay Informed</AlertTitle>
                    Configure how you want to receive updates about your farm operations and market changes.
                  </Alert>
                  <Typography variant="h6" gutterBottom>
                    Communication Channels
                  </Typography>
                  <Stack spacing={2}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={notifications.email}
                          onChange={handleNotificationChange('email')}
                        />
                      }
                      label="Email Notifications"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={notifications.push}
                          onChange={handleNotificationChange('push')}
                        />
                      }
                      label="Push Notifications"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={notifications.sms}
                          onChange={handleNotificationChange('sms')}
                        />
                      }
                      label="SMS Alerts"
                    />
                  </Stack>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="h6" gutterBottom>
                    Alert Types
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <Warning color="warning" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Pest Detection Alerts"
                        secondary="Get notified when pests are detected in your fields"
                      />
                      <Switch defaultChecked />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Yield Updates"
                        secondary="Receive weekly yield prediction updates"
                      />
                      <Switch defaultChecked />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Error color="error" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Weather Alerts"
                        secondary="Critical weather warnings for your location"
                      />
                      <Switch defaultChecked />
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
                <CardHeader title="Theme & Appearance" avatar={<Palette />} />
                <CardContent>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Theme</InputLabel>
                    <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
                      <MenuItem value="light">Light</MenuItem>
                      <MenuItem value="dark">Dark</MenuItem>
                      <MenuItem value="auto">Auto (System)</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Language</InputLabel>
                    <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                      <MenuItem value="fr">French</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Compact Mode"
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" fullWidth>
                    Apply Changes
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Dashboard Layout" avatar={<CheckCircle />} />
                <CardContent>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Customize your dashboard layout and widget preferences.
                  </Typography>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>Widget Visibility</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={1}>
                        <FormControlLabel control={<Switch defaultChecked />} label="Weather Widget" />
                        <FormControlLabel control={<Switch defaultChecked />} label="Crop Analytics" />
                        <FormControlLabel control={<Switch defaultChecked />} label="Market Prices" />
                        <FormControlLabel control={<Switch />} label="Recent Alerts" />
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                    Reset Layout
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {tabValue === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Password & Authentication" avatar={<Security />} />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Current Password"
                    type="password"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="New Password"
                    type="password"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Confirm New Password"
                    type="password"
                    sx={{ mb: 2 }}
                  />
                  <FormControlLabel
                    control={<Switch />}
                    label="Two-Factor Authentication"
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" fullWidth>
                    Update Password
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Session Management" avatar={<CheckCircle />} />
                <CardContent>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Manage your active sessions and login history.
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Current Session"
                        secondary="Active since today at 9:00 AM"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Warning color="warning" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Previous Session"
                        secondary="Yesterday at 6:00 PM"
                      />
                    </ListItem>
                  </List>
                  <Button variant="outlined" fullWidth>
                    View All Sessions
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {tabValue === 4 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Data Management" avatar={<Storage />} />
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Manage your data backup, export, and privacy settings.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <Typography variant="h6">Data management tools would be displayed here</Typography>
                    )}
                  </Box>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" startIcon={<Backup />}>
                      Backup Data
                    </Button>
                    <Button variant="outlined" startIcon={<Restore />}>
                      Restore Data
                    </Button>
                    <Button variant="outlined" startIcon={<Download />}>
                      Export Data
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

export default Settings;
