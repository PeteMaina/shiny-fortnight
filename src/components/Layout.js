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

const Layout = ({ children, activeItem }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [autoIrrigation, setAutoIrrigation] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: activeItem === 'Dashboard', badge: null },
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
              {activeItem}
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
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
