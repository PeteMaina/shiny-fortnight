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
                  <CardHeader title="AI Recommendations" titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }} />
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
                    action={<IconButton><BarChart /></IconButton>}
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
                    action={<IconButton><PieChart /></IconButton>}
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
                        <Button variant="outlined" startIcon={<Download />} size="small">
                          Export PDF
                        </Button>
                        <Button variant="outlined" startIcon={<Upload />} size="small">
                          Import Data
                        </Button>
                      </Stack>
                    }
                  />
                  <CardContent>
                    <Typography variant="body1" color="text.secondary">
                      Farm reports and analytics content will be displayed here.
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Pagination count={10} color="primary" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {/* Floating Action Button */}
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            onClick={() => setDialogOpen(true)}
          >
            <Add />
          </Fab>

          {/* Speed Dial */}
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 16, right: 80 }}
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

          {/* Bottom Navigation for Mobile */}
          {isMobile && (
            <BottomNavigation
              value={bottomNavValue}
              onChange={(event, newValue) => {
                setBottomNavValue(newValue);
              }}
              showLabels
              sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
            >
              <BottomNavigationAction label="Home" icon={<DashboardIcon />} />
              <BottomNavigationAction label="Analytics" icon={<Analytics />} />
              <BottomNavigationAction label="Controls" icon={<Settings />} />
              <BottomNavigationAction label="Reports" icon={<Assessment />} />
            </BottomNavigation>
          )}

          {/* Dialog */}
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Add New Item</DialogTitle>
            <DialogContent>
              <Typography variant="body1">
                Add new item dialog content here.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => setDialogOpen(false)}>Add</Button>
            </DialogActions>
          </Dialog>

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

          {/* Loading Backdrop */}
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
