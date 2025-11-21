import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Button, Switch, FormControlLabel } from '@mui/material';
import { WaterDrop, PlayArrow, Stop } from '@mui/icons-material';

const IrrigationControl = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Irrigation Control
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Manage and automate irrigation systems.
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
                  control={<Switch defaultChecked />}
                  label="Auto Irrigation"
                />
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
