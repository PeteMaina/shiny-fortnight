import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Divider,
  Button,
  Chip
} from '@mui/material';
import { Assessment, TrendingUp, TrendingDown, Download, Print } from '@mui/icons-material';

const FinancialReports = () => {
  const financialData = [
    { category: 'Revenue', amount: '$125,000', change: '+12%', trend: 'up' },
    { category: 'Expenses', amount: '$85,000', change: '-5%', trend: 'down' },
    { category: 'Profit', amount: '$40,000', change: '+25%', trend: 'up' },
    { category: 'Investments', amount: '$15,000', change: '+8%', trend: 'up' },
  ];

  return (
    <Box sx={{ pb: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight={700} color="primary.main">
            Financial Reports
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Profitability analysis, expense tracking, and revenue forecasting.
          </Typography>
        </Box>
        <Box>
          <Button startIcon={<Print />} sx={{ mr: 1 }}>Print</Button>
          <Button variant="contained" startIcon={<Download />}>Export PDF</Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Annual Financial Summary"
              avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}><Assessment /></Avatar>}
            />
            <Divider />
            <CardContent sx={{ p: 0 }}>
              <TableContainer>
                <Table>
                  <TableHead sx={{ bgcolor: 'background.default' }}>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Change (YoY)</TableCell>
                      <TableCell>Trend</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {financialData.map((row) => (
                      <TableRow key={row.category} hover>
                        <TableCell>
                          <Typography variant="subtitle2" fontWeight={600}>{row.category}</Typography>
                        </TableCell>
                        <TableCell>{row.amount}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', color: row.trend === 'up' ? 'success.main' : 'error.main' }}>
                            {row.trend === 'up' ? <TrendingUp fontSize="small" sx={{ mr: 1 }} /> : <TrendingDown fontSize="small" sx={{ mr: 1 }} />}
                            {row.change}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip label={row.trend === 'up' ? 'Positive' : 'Negative'} color={row.trend === 'up' ? 'success' : 'error'} size="small" variant="outlined" />
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
    </Box>
  );
};

export default FinancialReports;
