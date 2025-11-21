import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Button, Chip } from '@mui/material';
import { Agriculture, Build, Schedule, Warning } from '@mui/icons-material';

const FarmEquipment = () => {
  const equipment = [
    { name: 'John Deere Tractor', status: 'Operational', maintenance: 'Due in 45 days', location: 'Barn A' },
    { name: 'Irrigation Pump', status: 'Maintenance Required', maintenance: 'Overdue', location: 'Field B' },
    { name: 'Harvester', status: 'Operational', maintenance: 'Due in 120 days', location: 'Equipment Shed' },
    { name: 'Seeder', status: 'Out of Service', maintenance: 'Scheduled for tomorrow', location: 'Workshop' },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Farm Equipment
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Monitor and manage your farm machinery and equipment.
        </Typography>

        <Grid container spacing={3}>
          {equipment.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardHeader
                  avatar={<Agriculture />}
                  title={item.name}
                  subheader={item.location}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={item.status}
                      color={
                        item.status === 'Operational' ? 'success' :
                        item.status === 'Maintenance Required' ? 'warning' : 'error'
                      }
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    {item.status === 'Maintenance Required' && <Warning color="warning" />}
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Maintenance: {item.maintenance}
                  </Typography>
                  <Button variant="outlined" size="small">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Maintenance Schedule"
                avatar={<Schedule />}
              />
              <CardContent>
                <Button variant="contained" startIcon={<Build />}>
                  Schedule Maintenance
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FarmEquipment;
