import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Help,
  ContactSupport,
  Book,
  ExpandMore,
  Email,
  Phone,
  Forum,
} from '@mui/icons-material';

const HelpSupport = () => {
  const faqs = [
    {
      question: 'How do I set up irrigation schedules?',
      answer: 'Navigate to Irrigation Control and use the scheduling feature to set automated watering times based on soil moisture levels.'
    },
    {
      question: 'What should I do if a sensor goes offline?',
      answer: 'Check the IoT Sensors page for status updates. If a sensor is offline, try resetting it or contact technical support.'
    },
    {
      question: 'How can I view my financial reports?',
      answer: 'Go to Financial Reports in the sidebar to access detailed profit and loss statements, expense tracking, and revenue analytics.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade encryption for all your farm data and personal information.'
    },
  ];

  return (
    <Box sx={{ pb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={700} color="primary.main">
          Help & Support
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Resources, FAQs, and contact channels for assistance.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardHeader
              title="Documentation Center"
              avatar={<Avatar sx={{ bgcolor: 'primary.main' }}><Book /></Avatar>}
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Access comprehensive user guides, video tutorials, and API documentation to get the most out of AgriAI.
              </Typography>
              <Button variant="contained" fullWidth>
                Browse Guides
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardHeader
              title="Contact Support"
              avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}><ContactSupport /></Avatar>}
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button variant="outlined" fullWidth startIcon={<Email />}>Email Us</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" fullWidth startIcon={<Phone />}>Call Us</Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" fullWidth startIcon={<Forum />}>Live Chat</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Frequently Asked Questions"
              avatar={<Avatar sx={{ bgcolor: 'info.main' }}><Help /></Avatar>}
            />
            <Divider />
            <CardContent>
              {faqs.map((faq, index) => (
                <Accordion key={index} disableGutters elevation={0} sx={{ '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={500}>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">{faq.answer}</Typography>
                  </AccordionDetails>
                  {index < faqs.length - 1 && <Divider />}
                </Accordion>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HelpSupport;
