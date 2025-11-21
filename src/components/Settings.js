import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Switch, FormControlLabel, Button, TextField } from '@mui/material';
import { Settings as SettingsIcon, Notifications, Security, AccountCircle } from '@mui/icons-material';

const Settings = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Manage your account settings and preferences.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Notifications"
                avatar={<Notifications />}
              />
              <CardContent>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email notifications"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Push notifications"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="SMS alerts"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Account"
                avatar={<AccountCircle />}
              />
              <CardContent>
                <TextField
                  label="Email"
                  defaultValue="farmer@example.com"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Farm Name"
                  defaultValue="Green Valley Farm"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Button variant="contained">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Security"
                avatar={<Security />}
              />
              <CardContent>
                <Button variant="outlined" sx={{ mb: 2 }}>
                  Change Password
                </Button>
                <Button variant="outlined">
                  Enable Two-Factor Authentication
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Settings;
