import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Chip,
  Stack,
  IconButton,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import {
  Agriculture,
  Analytics,
  WaterDrop,
  Grass,
  TrendingUp,
  Security,
  Cloud,
  Smartphone,
  ArrowForward,
  PlayArrow,
  Star,
  CheckCircle,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Agriculture sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'AI-Powered Crop Recommendations',
      description: 'Get personalized crop suggestions based on your location, soil type, and climate data.',
    },
    {
      icon: <Analytics sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into your farm performance with predictive analytics.',
    },
    {
      icon: <WaterDrop sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Smart Irrigation',
      description: 'Optimize water usage with AI-driven irrigation recommendations.',
    },
    {
      icon: <Grass sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Fertilizer Optimization',
      description: 'Precise fertilizer recommendations to maximize yield and minimize waste.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Yield Prediction',
      description: 'Accurate yield forecasts to help you plan and optimize your harvest.',
    },
    {
      icon: <Security sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Farm Security',
      description: 'Monitor your farm 24/7 with AI-powered security and alert systems.',
    },
  ];

  const testimonials = [
    {
      name: 'John Farmer',
      role: 'Organic Farmer',
      avatar: 'J',
      content: 'This app has revolutionized my farming practices. The AI recommendations are spot on!',
      rating: 5,
    },
    {
      name: 'Sarah Green',
      role: 'AgriTech Entrepreneur',
      avatar: 'S',
      content: 'The most comprehensive farming app I\'ve ever used. Features beyond imagination.',
      rating: 5,
    },
    {
      name: 'Mike Thompson',
      role: 'Large Scale Farmer',
      avatar: 'M',
      content: 'Increased my yields by 30% in just one season. Game-changing technology.',
      rating: 5,
    },
  ];

  return (
    <Box>
      {/* Navigation */}
      <HideOnScroll>
        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}>
              AgriAI
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button variant="outlined" onClick={() => navigate('/auth')}>
                Sign In
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #E8F5E8 0%, #F1F8E9 100%)',
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h1" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                Revolutionize Your Farming with AI
              </Typography>
              <Typography variant="h5" paragraph sx={{ color: 'text.secondary', mb: 4 }}>
                Discover the best crops for your location, optimize fertilizers, irrigation, and boost yields with cutting-edge AI technology.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => navigate('/auth')}
                  sx={{ px: 4, py: 2, borderRadius: 3 }}
                >
                  Get Started Free
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow />}
                  sx={{ px: 4, py: 2, borderRadius: 3 }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://via.placeholder.com/600x400/4CAF50/FFFFFF?text=AgriAI+Dashboard"
                alt="AgriAI Dashboard"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 8, color: 'primary.main' }}>
            Powerful Features for Modern Farmers
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Typography variant="h3" align="center" sx={{ fontWeight: 'bold' }}>
                10,000+
              </Typography>
              <Typography variant="h6" align="center">
                Farmers Served
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" align="center" sx={{ fontWeight: 'bold' }}>
                30%
              </Typography>
              <Typography variant="h6" align="center">
                Average Yield Increase
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" align="center" sx={{ fontWeight: 'bold' }}>
                50+
              </Typography>
              <Typography variant="h6" align="center">
                AI Models
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" align="center" sx={{ fontWeight: 'bold' }}>
                24/7
              </Typography>
              <Typography variant="h6" align="center">
                Support
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 12, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 8, color: 'primary.main' }}>
            What Farmers Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>{testimonial.avatar}</Avatar>
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{testimonial.role}</Typography>
                    </Box>
                  </Stack>
                  <Typography variant="body1" paragraph>
                    "{testimonial.content}"
                  </Typography>
                  <Stack direction="row" spacing={0.5}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: 'warning.main' }} />
                    ))}
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 12, backgroundColor: 'secondary.main', color: 'white' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Ready to Transform Your Farm?
          </Typography>
          <Typography variant="h5" align="center" paragraph sx={{ mb: 4 }}>
            Join thousands of farmers already using AgriAI to optimize their operations.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/auth')}
              sx={{
                px: 6,
                py: 3,
                fontSize: '1.2rem',
                backgroundColor: 'white',
                color: 'secondary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              Start Your Free Trial
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                AgriAI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Empowering farmers with AI-driven insights for sustainable agriculture.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom>
                Product
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">Features</Typography>
                <Typography variant="body2">Pricing</Typography>
                <Typography variant="body2">API</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">About</Typography>
                <Typography variant="body2">Blog</Typography>
                <Typography variant="body2">Careers</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom>
                Support
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">Help Center</Typography>
                <Typography variant="body2">Contact</Typography>
                <Typography variant="body2">Status</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom>
                Legal
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">Privacy</Typography>
                <Typography variant="body2">Terms</Typography>
                <Typography variant="body2">Security</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" color="text.secondary" align="center">
              © 2023 AgriAI. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
