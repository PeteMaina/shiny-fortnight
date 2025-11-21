import React, { useState } from 'react';
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
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  AppBar,
  Toolbar,
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

const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [irrigationLevel, setIrrigationLevel] = useState(50);
  const [autoIrrigation, setAutoIrrigation] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const [ratingValue, setRatingValue] = useState(4);
  const [loading, setLoading] = useState(false);

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

  const speedDialActions = [
    { icon: <Add />, name: 'Add Field' },
    { icon: <CameraAlt />, name: 'Take Photo' },
    { icon: <Mic />, name: 'Record Audio' },
    { icon: <LocationOn />, name: 'GPS Location' },
  ];

  const drawer = (
    <Box sx={{ height: '100%', background: 'linear-gradient(180deg, #E8F5E8 0%, #F1F8E9 100%)' }}>
      <Box sx={{ p: 3, textAlign: 'center', borderBottom: 1, borderColor: 'divider' }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60, mx: 'auto', mb: 2 }}>
          <Agriculture sx={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          AgriAI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Smart Farming Platform
        </Typography>
      </Box>

      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                if (!item.active) {
                  const route = `/${item.text.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(' ', '-')}`;
                  navigate(route);
                }
              }}
              sx={{
                mx: 2,
                mb: 1,
                borderRadius: 2,
                backgroundColor: item.active ? 'primary.main' : 'transparent',
                color: item.active ? 'white' : 'text.primary',
                '&:hover': {
                  backgroundColor: item.active ? 'primary.dark' : 'action.hover',
                  cursor: item.active ? 'default' : 'pointer',
                },
              }}
            >
              <ListItemIcon sx={{ color: item.active ? 'white' : 'primary.main', minWidth: 40 }}>
                {item.badge ? (
                  <Badge badgeContent={item.badge} color="error">
                    {item.icon}
                  </Badge>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Logout />}
          onClick={() => navigate('/')}
          sx={{ borderRadius: 3 }}
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          color: 'text.primary',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Breadcrumbs aria-label="breadcrumb" sx={{ flexGrow: 1 }}>
            <Link underline="hover" color="inherit" href="#">
              Dashboard
            </Link>
            <Typography color="text.primary">Overview</Typography>
          </Breadcrumbs>

          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              size="small"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{ mr: 2, minWidth: 200 }}
            />

            <IconButton color="inherit" onClick={handleMenuClick}>
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={handlePopoverClick}>
              <Settings />
            </IconButton>

            <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
              <Agriculture sx={{ fontSize: 18 }} />
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Settings Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Help fontSize="small" />
          </ListItemIcon>
          <ListItemText>Help</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); navigate('/'); }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>

      {/* Notifications Popover */}
      <Popover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, minWidth: 300 }}>
          <Typography variant="h6" gutterBottom>
            Quick Settings
          </Typography>
          <Stack spacing={2}>
            <FormControlLabel
              control={
                <Switch
                  checked={autoIrrigation}
                  onChange={(e) => setAutoIrrigation(e.target.checked)}
                />
              }
              label="Auto Irrigation"
            />
            <FormControlLabel
              control={
                <Switch defaultChecked />
              }
              label="Weather Alerts"
            />
            <FormControlLabel
              control={
                <Switch defaultChecked />
              }
              label="Pest Notifications"
            />
          </Stack>
        </Box>
      </Popover>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 'none',
              boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 'none',
              boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
        }}
      >
        <Container maxWidth="xl">
          {/* Welcome Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Welcome back, Farmer!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here's what's happening on your farm today.
            </Typography>
          </Box>

          {/* Quick Stats */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {quickStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                      <Avatar sx={{ bgcolor: `${stat.color}.main`, width: 48, height: 48 }}>
                        {stat.icon}
                      </Avatar>
                      <Chip
                        label={stat.change}
                        color={stat.change.startsWith('+') ? 'success' : stat.change.startsWith('-') ? 'error' : 'default'}
                        size="small"
                        sx={{ borderRadius: 2 }}
                      />
                    </Stack>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Tabs Section */}
          <Box sx={{ mb: 4 }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="dashboard tabs">
              <Tab label="Overview" />
              <Tab label="Analytics" />
              <Tab label="Controls" />
              <Tab label="Reports" />
            </Tabs>
          </Box>

          {/* Tab Content */}
          {tabValue === 0 && (
            <Grid container spacing={3}>
              {/* Alerts Panel */}
              <Grid item xs={12} lg={8}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Farm Alerts & Notifications"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                    action={
                      <Button variant="outlined" size="small" sx={{ borderRadius: 2 }}>
                        View All
                      </Button>
                    }
                  />
                  <CardContent sx={{ p: 0 }}>
                    <List>
                      {alerts.map((alert, index) => (
                        <React.Fragment key={index}>
                          <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemIcon>
                              {alert.type === 'warning' && <Warning color="warning" />}
                              {alert.type === 'error' && <Error color="error" />}
                              {alert.type === 'info' && <Info color="info" />}
                              {alert.type === 'success' && <CheckCircle color="success" />}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                  {alert.title}
                                </Typography>
                              }
                              secondary={
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                  <Typography variant="body2" color="text.secondary">
                                    {alert.message}
                                  </Typography>
                                  <Typography variant="caption" color="text.secondary">
                                    {alert.time}
                                  </Typography>
                                </Stack>
                              }
                            />
                          </ListItem>
                          {index < alerts.length - 1 && <Divider />}
                        </React.Fragment>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              {/* AI Recommendations */}
              <Grid item xs={12} lg={4}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="AI Recommendations"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      {recommendations.map((rec, index) => (
                        <Box key={index} sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                              {rec.title}
                            </Typography>
                            <Chip
                              label={rec.priority}
                              size="small"
                              color={rec.priority === 'high' ? 'error' : rec.priority === 'medium' ? 'warning' : 'default'}
                            />
                          </Stack>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {rec.description}
                          </Typography>
                          <Button variant="contained" size="small" sx={{ borderRadius: 2 }}>
                            {rec.action}
                          </Button>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              {/* Charts and Analytics */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Yield Trends"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                    action={
                      <IconButton>
                        <BarChart />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography variant="body1" color="text.secondary">
                        Interactive Chart Component
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Resource Usage"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                    action={
                      <IconButton>
                        <PieChart />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography variant="body1" color="text.secondary">
                        Resource Usage Chart
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {tabValue === 1 && (
            <Grid container spacing={3}>
              {/* Crop Performance Table */}
              <Grid item xs={12}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Crop Performance Analytics"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                    action={
                      <Stack direction="row" spacing={1}>
                        <TextField
                          size="small"
                          placeholder="Filter crops..."
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FilterList />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button variant="outlined" startIcon={<Download />} size="small">
                          Export
                        </Button>
                      </Stack>
                    }
                  />
                  <CardContent>
                    <TableContainer component={Paper} elevation={0}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Crop</TableCell>
                            <TableCell align="right">Yield (tons)</TableCell>
                            <TableCell align="right">Area (acres)</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Profit ($)</TableCell>
                            <TableCell align="center">Rating</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {cropData.map((crop) => (
                            <TableRow key={crop.name} hover>
                              <TableCell component="th" scope="row">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                  <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                                    <Agriculture sx={{ fontSize: 16 }} />
                                  </Avatar>
                                  <Typography variant="subtitle2">{crop.name}</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell align="right">{crop.yield.toLocaleString()}</TableCell>
                              <TableCell align="right">{crop.area}</TableCell>
                              <TableCell>
                                <Chip
                                  label={crop.status}
                                  color={
                                    crop.status === 'Excellent' ? 'success' :
                                    crop.status === 'Good' ? 'primary' :
                                    crop.status === 'Warning' ? 'warning' : 'error'
                                  }
                                  size="small"
                                />
                              </TableCell>
                              <TableCell align="right">${crop.profit.toLocaleString()}</TableCell>
                              <TableCell align="center">
                                <Rating value={4} readOnly size="small" />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Analytics Widgets */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Weather Impact Analysis"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Temperature Effect
                        </Typography>
                        <LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 4 }} />
                        <Typography variant="caption" color="text.secondary">
                          +15% yield impact
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Rainfall Distribution
                        </Typography>
                        <LinearProgress variant="determinate" value={60} sx={{ height: 8, borderRadius: 4 }} />
                        <Typography variant="caption" color="text.secondary">
                          Optimal conditions
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Humidity Levels
                        </Typography>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4 }} />
                        <Typography variant="caption" color="text.secondary">
                          Favorable for growth
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Predictive Insights"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Alert severity="success" sx={{ borderRadius: 2 }}>
                        <AlertTitle>Yield Prediction</AlertTitle>
                        Expected 12% increase in corn yield next harvest
                      </Alert>
                      <Alert severity="warning" sx={{ borderRadius: 2 }}>
                        <AlertTitle>Risk Alert</AlertTitle>
                        Potential pest outbreak in 2 weeks - preventive measures recommended
                      </Alert>
                      <Alert severity="info" sx={{ borderRadius: 2 }}>
                        <AlertTitle>Market Trend</AlertTitle>
                        Wheat prices expected to rise 8% in Q4
                      </Alert>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {tabValue === 2 && (
            <Grid container spacing={3}>
              {/* Irrigation Control */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Irrigation Control"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                    action={
                      <FormControlLabel
                        control={
                          <Switch
                            checked={autoIrrigation}
                            onChange={(e) => setAutoIrrigation(e.target.checked)}
                          />
                        }
                        label="Auto"
                      />
                    }
                  />
                  <CardContent>
                    <Stack spacing={3}>
                      <Box>
                        <Typography variant="body2" gutterBottom>
                          Water Level: {irrigationLevel}%
                        </Typography>
                        <Slider
                          value={irrigationLevel}
                          onChange={(e, newValue) => setIrrigationLevel(newValue)}
                          aria-labelledby="irrigation-slider"
                          disabled={autoIrrigation}
                        />
                      </Box>

                      <FormControl fullWidth>
                        <InputLabel>Crop Type</InputLabel>
                        <Select
                          value={selectedCrop}
                          label="Crop Type"
                          onChange={(e) => setSelectedCrop(e.target.value)}
                        >
                          <MenuItem value="corn">Corn</MenuItem>
                          <MenuItem value="wheat">Wheat</MenuItem>
                          <MenuItem value="tomatoes">Tomatoes</MenuItem>
                          <MenuItem value="soybeans">Soybeans</MenuItem>
                        </Select>
                      </FormControl>

                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="contained"
                          startIcon={<PlayArrow />}
                          disabled={autoIrrigation}
                          fullWidth
                        >
                          Start Irrigation
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<Stop />}
                          disabled={autoIrrigation}
                          fullWidth
                        >
                          Stop
                        </Button>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              {/* Fertilizer Management */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Fertilizer Management"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  />
                  <CardContent>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>Nitrogen Application</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack spacing={2}>
                          <TextField
                            label="Amount (kg/ha)"
                            type="number"
                            defaultValue={120}
                            size="small"
                          />
                          <FormControl component="fieldset">
                            <RadioGroup defaultValue="scheduled">
                              <FormControlLabel value="immediate" control={<Radio />} label="Apply Immediately" />
                              <FormControlLabel value="scheduled" control={<Radio />} label="Schedule for Tomorrow" />
                            </RadioGroup>
                          </FormControl>
                          <Button variant="contained" size="small">
                            Apply Fertilizer
                          </Button>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>Phosphorus & Potassium</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2" color="text.secondary">
                          Recommended: P: 80kg/ha, K: 120kg/ha
                        </Typography>
                        <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                          View Detailed Plan
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </Grid>

              {/* Equipment Control */}
              <Grid item xs={12}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Equipment Control"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  />
                  <CardContent>
                    <Grid container spacing={2}>
                      {[
                        { name: 'Tractor 1', status: 'Active', battery: 85 },
                        { name: 'Irrigation Pump', status: 'Standby', battery: 92 },
                        { name: 'Weather Station', status: 'Online', battery: 78 },
                        { name: 'Soil Sensor Array', status: 'Active', battery: 65 },
                      ].map((equipment, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                              <Typography variant="subtitle2">{equipment.name}</Typography>
                              <Chip
                                label={equipment.status}
                                size="small"
                                color={equipment.status === 'Active' ? 'success' : equipment.status === 'Online' ? 'primary' : 'default'}
                              />
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              <BatteryFull sx={{ color: 'success.main' }} />
                              <Typography variant="caption">{equipment.battery}%</Typography>
                            </Stack>
                            <LinearProgress variant="determinate" value={equipment.battery} sx={{ mt: 1, height: 4, borderRadius: 2 }} />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {tabValue === 3 && (
            <Grid container spacing={3}>
              {/* Reports Section */}
              <Grid item xs={12}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <CardHeader
                    title="Farm Reports & Analytics"
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                    action={
                      <Stack direction="row" spacing={1}>
                        <Button variant="outlined" startIcon={<Print />} size="small">
                          Print
                        </Button>
                        <Button variant="outlined" startIcon={<Share />} size="small">
                          Share
                        </Button>
                        <Button variant="contained" startIcon={<Download />} size="small">
                          Export PDF
                        </Button>
                      </Stack>
                    }
                  />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Card variant="outlined" sx={{ borderRadius: 2 }}>
                          <CardContent sx={{ textAlign: 'center' }}>
                            <Assessment sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                              Financial Report
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                              Monthly revenue, expenses, and profit analysis
                            </Typography>
                            <Button variant="outlined" size="small">
                              View Report
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Card variant="outlined" sx={{ borderRadius: 2 }}>
                          <CardContent sx={{ textAlign: 'center' }}>
                            <Timeline sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                              Production Report
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                              Crop yields, quality metrics, and performance indicators
                            </Typography>
                            <Button variant="outlined" size="small">
                              View Report
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Card variant="outlined" sx={{ borderRadius: 2 }}>
                          <CardContent sx={{ textAlign: 'center' }}>
                            <Nature sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                              Sustainability Report
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                              Environmental impact, carbon footprint, and eco-friendly practices
                            </Typography>
                            <Button variant="outlined" size="small">
                              View Report
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {/* Speed Dial */}
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {speedDialActions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>

          {/* Snackbar */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
              Action completed successfully!
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
