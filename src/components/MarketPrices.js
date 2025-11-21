import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { BarChart, TrendingUp, TrendingDown } from '@mui/icons-material';

const MarketPrices = () => {
  const marketData = [
    { crop: 'Corn', price: '$4.50/bushel', change: '+2.5%', trend: 'up' },
    { crop: 'Wheat', price: '$5.20/bushel', change: '-1.2%', trend: 'down' },
    { crop: 'Soybeans', price: '$12.80/bushel', change: '+0.8%', trend: 'up' },
    { crop: 'Tomatoes', price: '$2.30/lb', change: '+3.1%', trend: 'up' },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Market Prices
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Current market prices and trends for agricultural commodities.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Commodity Prices"
                avatar={<BarChart />}
              />
              <CardContent>
                <TableContainer component={Paper} elevation={0}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Crop</TableCell>
                        <TableCell>Current Price</TableCell>
                        <TableCell>Change (24h)</TableCell>
                        <TableCell>Trend</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {marketData.map((row) => (
                        <TableRow key={row.crop}>
                          <TableCell>{row.crop}</TableCell>
                          <TableCell>{row.price}</TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              {row.trend === 'up' ? <TrendingUp color="success" sx={{ mr: 1 }} /> : <TrendingDown color="error" sx={{ mr: 1 }} />}
                              {row.change}
                            </Box>
                          </TableCell>
                          <TableCell>{row.trend === 'up' ? 'Rising' : 'Falling'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MarketPrices;
