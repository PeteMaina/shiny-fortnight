import React, { useState } from 'react';
import {
  Box,
  Container,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  Stack,
  TextField,
  InputAdornment,
  Popover,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Breadcrumbs,
  Link,
  Typography,
  Avatar,
  Badge,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  Agriculture,
  Menu as MenuIcon,
  Notifications,
  Settings,
  Help,
  Logout,
  Search,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const drawerWidth = 280;

const Layout = ({ children, activeItem }) => {
  const navigate = useNavigate();
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
          <Sidebar activeItem={activeItem} />
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
          <Sidebar activeItem={activeItem} />
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
