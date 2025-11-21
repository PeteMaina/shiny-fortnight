import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Assessment, TrendingUp, TrendingDown } from '@mui/icons-material';

const FinancialReports = () => {
  const financialData = [
    { category: 'Revenue', amount: '$125,000', change: '+12%', trend: 'up' },
    { category: 'Expenses', amount: '$85,000', change: '-5%', trend: 'down' },
    { category: 'Profit', amount: '$40,000', change: '+25%', trend: 'up' },
    { category: 'Investments', amount: '$15,000', change: '+8%', trend: 'up' },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Financial Reports
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Comprehensive financial overview and reports for your farm operations.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Financial Summary"
                avatar={<Assessment />}
              />
              <CardContent>
                <TableContainer component={Paper} elevation={0}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Change (YoY)</TableCell>
                        <TableCell>Trend</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {financialData.map((row) => (
                        <TableRow key={row.category}>
                          <TableCell>{row.category}</TableCell>
                          <TableCell>{row.amount}</TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              {row.trend === 'up' ? <TrendingUp color="success" sx={{ mr: 1 }} /> : <TrendingDown color="error" sx={{ mr: 1 }} />}
                              {row.change}
                            </Box>
                          </TableCell>
                          <TableCell>{row.trend === 'up' ? 'Increasing' : 'Decreasing'}</TableCell>
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

export default FinancialReports;
