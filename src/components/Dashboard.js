import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  Avatar,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  Fab,
  Badge,
  LinearProgress,
  Alert,
  AlertTitle,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Stepper,
  Step,
  StepLabel,
  MobileStepper,
  BottomNavigation,
  BottomNavigationAction,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Tooltip,
  Popover,
  Menu,
  Breadcrumbs,
  Link,
  Pagination,
  Rating,
  Skeleton,
  Snackbar,
  CircularProgress,
  Backdrop,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Fade,
  Zoom,
  Slide,
  Grow,
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
  Menu as MenuIcon,
  Notifications,
  Settings,
  Help,
  Logout,
  Dashboard as DashboardIcon,
  Assessment,
  Timeline,
  Map,
  Science,
  ShoppingCart,
  People,
  BarChart,
  PieChart,
  ShowChart,
  Nature,
  WbSunny,
  Opacity,
  LocalFlorist,
  BugReport,
  Warning,
  CheckCircle,
  Error,
  Info,
  ExpandMore,
  Search,
  FilterList,
  MoreVert,
  Add,
  Edit,
  Delete,
  Share,
  Download,
  Upload,
  Refresh,
  PlayArrow,
  Pause,
  Stop,
  Favorite,
  FavoriteBorder,
  Star,
  StarBorder,
  ThumbUp,
  ThumbDown,
  Comment,
  Reply,
  Send,
  AttachFile,
  Image,
  VideoCall,
  Call,
  Email,
  LocationOn,
  Schedule,
  Event,
  Folder,
  FileCopy,
  Print,
  Save,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Fullscreen,
  FullscreenExit,
  Brightness6,
  Palette,
  Tune,
  Build,
  Code,
  Bug,
  Shield,
  Lock,
  Unlock,
  Visibility,
  VisibilityOff,
  Wifi,
  WifiOff,
  BatteryFull,
  BatteryCharging,
  SignalCellular4Bar,
  SignalWifi4Bar,
  Bluetooth,
  BluetoothDisabled,
  Usb,
  UsbOff,
  AirplanemodeActive,
  AirplanemodeInactive,
  VolumeUp,
  VolumeDown,
  VolumeMute,
  VolumeOff,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  PhotoCamera,
  CameraAlt,
  Movie,
  MusicNote,
  QueueMusic,
  LibraryMusic,
  Album,
  Repeat,
  RepeatOne,
  Shuffle,
  SkipNext,
  SkipPrevious,
  PlayCircle,
  PauseCircle,
  StopCircle,
  FastForward,
  FastRewind,
  Replay,
  Replay10,
  Forward10,
  Forward30,
  Replay30,
  Subtitles,
  ClosedCaption,
  Hd,
  HighQuality,
  Equalizer,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 280;

const Dashboard = ({
  location,
  cropType,
  onSetCropType,
  onSetLocation,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [irrigationLevel, setIrrigationLevel] = useState(50);
  const [autoIrrigation, setAutoIrrigation] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const [ratingValue, setRatingValue] = useState(4);
  const [loading, setLoading] = useState(false);
  const [weatherDialogOpen, setWeatherDialogOpen] = useState(false);
  const [equipmentDialogOpen, setEquipmentDialogOpen] = useState(false);
  const [laborDialogOpen, setLaborDialogOpen] = useState(false);
  const [sustainabilityScore, setSustainabilityScore] = useState(85);
  const [realTimeData, setRealTimeData] = useState({
    temperature: 24,
    humidity: 65,
    soilMoisture: 78,
    lightLevel: 85
  });
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const lat = location?.lat || 40.7128;
        const lon = location?.lon || -74.0060;
        const response = await fetch(`http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          // Update realTimeData with actual weather data
          setRealTimeData(prev => ({
            ...prev,
            temperature: data.temperature,
            humidity: data.humidity
          }));
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [location]);

  // Simulate real-time data updates for non-weather sensors
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        soilMoisture: prev.soilMoisture + (Math.random() - 0.5) * 3,
        lightLevel: prev.lightLevel + (Math.random() - 0.5) * 4
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handlePopoverClick = (event) => {
    setPopoverAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCropTypeChange = (event) => {
    onSetCropType(event.target.value);
  };

  const handleLocationChange = (event) => {
    onSetLocation(event.target.value);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: true, badge: null },
    { text: 'Crop Analytics', icon: <Analytics />, badge: '3' },
    { text: 'Soil Management', icon: <Grass />, badge: null },
    { text: 'Irrigation Control', icon: <WaterDrop />, badge: 'New' },
    { text: 'Fertilizer Planner', icon: <Science />, badge: null },
    { text: 'Yield Prediction', icon: <TrendingUp />, badge: null },
    { text: 'Weather Insights', icon: <WbSunny />, badge: null },
    { text: 'Pest Control', icon: <BugReport />, badge: null },
    { text: 'Market Prices', icon: <BarChart />, badge: null },
    { text: 'Farm Equipment', icon: <Agriculture />, badge: null },
    { text: 'Labor Management', icon: <People />, badge: null },
    { text: 'Financial Reports', icon: <Assessment />, badge: null },
    { text: 'IoT Sensors', icon: <Smartphone />, badge: null },
    { text: 'Field Mapping', icon: <Map />, badge: null },
    { text: 'Sustainability', icon: <Nature />, badge: null },
    { text: 'Settings', icon: <Settings />, badge: null },
    { text: 'Help & Support', icon: <Help />, badge: null },
  ];

  const quickStats = [
    { title: 'Total Yield', value: '2,450 tons', change: '+12%', icon: <TrendingUp />, color: 'success' },
    { title: 'Water Usage', value: '1,230 L', change: '-8%', icon: <Opacity />, color: 'info' },
    { title: 'Fertilizer Cost', value: '$3,420', change: '+5%', icon: <LocalFlorist />, color: 'warning' },
    { title: 'Active Sensors', value: '47', change: '+2', icon: <Smartphone />, color: 'primary' },
  ];

  const alerts = [
    { type: 'warning', title: 'Irrigation Alert', message: 'Field 3 needs watering in 2 hours', time: '10 min ago', severity: 'warning' },
    { type: 'error', title: 'Pest Detection', message: 'Aphids detected in tomato field', time: '1 hour ago', severity: 'error' },
    { type: 'info', title: 'Weather Update', message: 'Rain expected tomorrow, adjust irrigation', time: '2 hours ago', severity: 'info' },
    { type: 'success', title: 'Yield Milestone', message: 'Corn yield target achieved!', time: '1 day ago', severity: 'success' },
  ];

  const recommendations = [
    { title: 'Optimize Fertilizer', description: 'Reduce nitrogen by 15% for better cost efficiency', action: 'Apply Changes', priority: 'high' },
    { title: 'Irrigation Schedule', description: 'Adjust watering to evening hours to reduce evaporation', action: 'Update Schedule', priority: 'medium' },
    { title: 'Crop Rotation', description: 'Consider planting legumes next season for soil health', action: 'Learn More', priority: 'low' },
    { title: 'Pest Prevention', description: 'Install companion planting for natural pest control', action: 'Get Plan', priority: 'high' },
  ];

  const cropData = [
    { name: 'Corn', yield: 2450, area: 50, status: 'Excellent', profit: 15420 },
    { name: 'Wheat', yield: 1800, area: 40, status: 'Good', profit: 11200 },
    { name: 'Tomatoes', yield: 3200, area: 25, status: 'Warning', profit: 18900 },
    { name: 'Soybeans', yield: 2100, area: 35, status: 'Good', profit: 13100 },
  ];

  const weatherForecast = weatherData?.forecast?.map((day, index) => ({
    day: day.day,
    temp: `${day.temp}°C`,
    condition: day.condition,
    icon: index === 0 ? <WbSunny /> : index === 1 ? <Cloud /> : index === 2 ? <Opacity /> : <WbSunny />,
    precipitation: `${day.precipitation}%`
  })) || [
    { day: 'Today', temp: '24°C', condition: 'Sunny', icon: <WbSunny />, precipitation: '0%' },
    { day: 'Tomorrow', temp: '22°C', condition: 'Cloudy', icon: <Cloud />, precipitation: '20%' },
    { day: 'Wednesday', temp: '26°C', condition: 'Rainy', icon: <Opacity />, precipitation: '80%' },
    { day: 'Thursday', temp: '28°C', condition: 'Sunny', icon: <WbSunny />, precipitation: '10%' },
  ];

  const equipmentStatus = [
    { name: 'Tractor A1', status: 'Active', battery: 85, location: 'Field 2', lastMaintenance: '2 days ago' },
    { name: 'Irrigation Pump', status: 'Idle', battery: 92, location: 'Station 1', lastMaintenance: '1 week ago' },
    { name: 'Soil Sensor Hub', status: 'Active', battery: 78, location: 'Field 1', lastMaintenance: '3 days ago' },
    { name: 'Weather Station', status: 'Active', battery: 95, location: 'Central', lastMaintenance: '1 day ago' },
  ];

  const laborSchedule = [
    { name: 'John Smith', role: 'Farm Manager', shift: '8AM-5PM', status: 'On Duty', tasks: ['Field inspection', 'Equipment check'] },
    { name: 'Maria Garcia', role: 'Irrigation Tech', shift: '6AM-2PM', status: 'On Duty', tasks: ['System monitoring', 'Maintenance'] },
    { name: 'David Chen', role: 'Harvest Worker', shift: '7AM-4PM', status: 'Break', tasks: ['Corn harvesting', 'Quality check'] },
    { name: 'Sarah Johnson', role: 'Soil Analyst', shift: '9AM-6PM', status: 'Off Duty', tasks: ['Sample collection', 'Lab analysis'] },
  ];

  const sustainabilityMetrics = [
    { metric: 'Carbon Footprint', value: '2.3 tons CO2', change: '-8%', status: 'improving' },
    { metric: 'Water Efficiency', value: '85%', change: '+5%', status: 'excellent' },
    { metric: 'Soil Health Score', value: '92/100', change: '+3%', status: 'good' },
    { metric: 'Energy Usage', value: '1,240 kWh', change: '-12%', status: 'improving' },
  ];

  const speedDialActions = [
    { icon: <Add />, name: 'Add Field' },
    { icon: <CameraAlt />, name: 'Take Photo' },
    { icon: <Mic />, name: 'Record Audio' },
    { icon: <LocationOn />, name: 'GPS Location' },
  ];

  return (
    <Container maxWidth="xl">
      {/* Welcome Section */}
      <Fade in timeout={1000}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Welcome back, Farmer!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here's what's happening on your farm today. Last updated: {new Date().toLocaleTimeString()}
          </Typography>

          {/* Crop Type Selector */}
          <Box sx={{ mt: 2, width: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="crop-type-label">Select Crop Type</InputLabel>
              <Select
                labelId="crop-type-label"
                value={cropType}
                label="Select Crop Type"
                onChange={handleCropTypeChange}
              >
                <MenuItem value="corn">Corn</MenuItem>
                <MenuItem value="wheat">Wheat</MenuItem>
                <MenuItem value="tomatoes">Tomatoes</MenuItem>
                <MenuItem value="soybeans">Soybeans</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Location Input */}
          <Box sx={{ mt: 2, width: 250 }}>
            <TextField
              label="Set Location"
              value={location || ''}
              placeholder="Enter location"
              onChange={handleLocationChange}
              fullWidth
              size="small"
            />
          </Box>
        </Box>
      </Fade>

      {/* Real-time Environmental Data */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          { label: 'Temperature', value: `${realTimeData.temperature.toFixed(1)}°C`, icon: <WbSunny />, color: 'warning' },
          { label: 'Humidity', value: `${realTimeData.humidity.toFixed(0)}%`, icon: <Opacity />, color: 'info' },
          { label: 'Soil Moisture', value: `${realTimeData.soilMoisture.toFixed(0)}%`, icon: <Grass />, color: 'success' },
          { label: 'Light Level', value: `${realTimeData.lightLevel.toFixed(0)}%`, icon: <Brightness6 />, color: 'primary' }
].map((sensor, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <Avatar sx={{ bgcolor: `${sensor.color}.main`, mr: 1 }}>
                    {sensor.icon}
                  </Avatar>
                  <Typography variant="h6">{sensor.label}</Typography>
                </Box>
                <Typography variant="h4" color={`${sensor.color}.main`}>
                  {sensor.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )) }
      </Grid>
    </Container>
  );
};

export default Dashboard;
