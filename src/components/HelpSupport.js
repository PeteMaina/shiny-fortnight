import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Help, ContactSupport, Book, ExpandMore } from '@mui/icons-material';

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
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Help & Support
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Find answers to common questions and get support for your farming operations.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Documentation"
                avatar={<Book />}
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Access comprehensive guides and tutorials for all features.
                </Typography>
                <Button variant="contained">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Contact Support"
                avatar={<ContactSupport />}
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Need help? Our support team is here to assist you.
                </Typography>
                <Button variant="outlined">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Frequently Asked Questions"
                avatar={<Help />}
              />
              <CardContent>
                {faqs.map((faq, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HelpSupport;
