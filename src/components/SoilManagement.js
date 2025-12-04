import React from 'react';
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Grass, Science, Opacity, Nature, Spa } from '@mui/icons-material';

const cropNutrientsInfo = {
  corn: {
    phOptimal: '6.0 - 6.8',
    moistureOptimal: '40% - 50%',
    nitrogen: 'High',
    phosphorus: 'Medium',
    potassium: 'Medium',
  },
  wheat: {
    phOptimal: '6.0 - 7.0',
    moistureOptimal: '30% - 40%',
    nitrogen: 'Medium',
    phosphorus: 'Medium',
    potassium: 'High',
  },
  rice: {
    phOptimal: '5.5 - 6.5',
    moistureOptimal: '50% - 70%',
    nitrogen: 'High',
    phosphorus: 'High',
    potassium: 'Medium',
  },
  default: {
    phOptimal: '6.0 - 7.0',
    moistureOptimal: '40% - 50%',
    nitrogen: 'Medium',
    phosphorus: 'Medium',
    potassium: 'Medium',
  },
};

const SoilManagement = ({ location, cropType = 'default' }) => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  // Sample dynamic data for demonstration, in real app fetched from APIs based on location and cropType
  const nutrients = cropNutrientsInfo[cropType] || cropNutrientsInfo.default;

  return (
    <Container maxWidth="xl" sx={{ pb: 4 }}>
      <Box sx={{ mt: 4 }}>
        <Typography variant={isSmDown ? 'h5' : 'h4'} gutterBottom>
          Soil Management
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Monitor soil health, pH levels, and nutrient content tailored for <strong>{cropType.charAt(0).toUpperCase() + cropType.slice(1)}</strong>{' '}
          cultivation{location ? ` in ${location}` : ''}.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Soil pH Level" avatar={<Science />} />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  pH: 6.8
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Optimal range: {nutrients.phOptimal}
                </Typography>
                <LinearProgress variant="determinate" value={85} aria-label="Soil pH status" />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Moisture Content" avatar={<Opacity />} />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  45%
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Ideal range: {nutrients.moistureOptimal}
                </Typography>
                <LinearProgress variant="determinate" value={75} aria-label="Moisture content" />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Nutrient Levels" avatar={<Grass />} />
              <CardContent>
                <List aria-label="Nutrient levels">
                  <ListItem>
                    <ListItemText
                      primary="Nitrogen"
                      secondary={nutrients.nitrogen}
                    />
                    <Chip color={nutrients.nitrogen === 'High' ? 'success' : 'warning'} label={nutrients.nitrogen} />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText
                      primary="Phosphorus"
                      secondary={nutrients.phosphorus}
                    />
                    <Chip color={nutrients.phosphorus === 'High' ? 'success' : 'warning'} label={nutrients.phosphorus} />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText
                      primary="Potassium"
                      secondary={nutrients.potassium}
                    />
                    <Chip color={nutrients.potassium === 'High' ? 'success' : 'warning'} label={nutrients.potassium} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Card>
            <CardHeader
              title="Sustainability Tips"
              avatar={<Nature />}
            />
            <CardContent>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Implement sustainable soil practices:
              </Typography>
              <ul>
                <li>Rotate crops to reduce pest and disease build-up.</li>
                <li>Use cover crops to prevent erosion and improve soil health.</li>
                <li>Apply organic amendments to enhance nutrient levels naturally.</li>
                <li>Monitor soil moisture to optimize irrigation and conserve water.</li>
              </ul>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Card>
            <CardHeader
              title="Additional Resources"
              avatar={<Spa />}
            />
            <CardContent>
              <Typography component="p">
                Visit the Soil Health Institute and international agricultural organizations for further guidance tailored to your region and crop types.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default SoilManagement;
