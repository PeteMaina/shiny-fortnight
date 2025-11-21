import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Button, Avatar } from '@mui/material';
import { People, Work, Schedule } from '@mui/icons-material';

const LaborManagement = () => {
  const workers = [
    { name: 'John Smith', role: 'Farm Manager', tasks: 5 },
    { name: 'Maria Garcia', role: 'Irrigation Specialist', tasks: 3 },
    { name: 'David Lee', role: 'Equipment Operator', tasks: 4 },
    { name: 'Sarah Johnson', role: 'Crop Scout', tasks: 2 },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Labor Management
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Manage farm workers, assign tasks, and track productivity.
        </Typography>

        <Grid container spacing={3}>
          {workers.map((worker, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardHeader
                  avatar={<Avatar><People /></Avatar>}
                  title={worker.name}
                  subheader={worker.role}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Active Tasks: {worker.tasks}
                  </Typography>
                  <Button variant="outlined" size="small">
                    View Tasks
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Task Scheduling"
                avatar={<Schedule />}
              />
              <CardContent>
                <Button variant="contained" startIcon={<Work />}>
                  Assign New Task
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LaborManagement;
