import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import CropAnalytics from './components/CropAnalytics';
import SoilManagement from './components/SoilManagement';
import IrrigationControl from './components/IrrigationControl';
import FertilizerPlanner from './components/FertilizerPlanner';
import YieldPrediction from './components/YieldPrediction';
import WeatherInsights from './components/WeatherInsights';
import PestControl from './components/PestControl';
import MarketPrices from './components/MarketPrices';
import FarmEquipment from './components/FarmEquipment';
import LaborManagement from './components/LaborManagement';
import FinancialReports from './components/FinancialReports';
import IoTSensors from './components/IoTSensors';
import FieldMapping from './components/FieldMapping';
import Sustainability from './components/Sustainability';
import Settings from './components/Settings';
import HelpSupport from './components/HelpSupport';

import { getIPLocation, getPreferredLocation } from './utils/locationUtils';

function App() {
  const [userLocation, setUserLocation] = useState('');
  const [locationDetails, setLocationDetails] = useState(null);

  useEffect(() => {
    async function fetchLocation() {
      const ipLoc = await getIPLocation();
      const preferredLoc = getPreferredLocation(userLocation, ipLoc);
      setLocationDetails(preferredLoc);
    }
    fetchLocation();
  }, [userLocation]);

  const handleSetUserLocation = (location) => {
    setUserLocation(location);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard location={locationDetails} onSetLocation={handleSetUserLocation} />} />
          <Route path="/crop-analytics" element={<CropAnalytics location={locationDetails} />} />
          <Route path="/soil-management" element={<SoilManagement location={locationDetails} />} />
          <Route path="/irrigation-control" element={<IrrigationControl location={locationDetails} />} />
          <Route path="/fertilizer-planner" element={<FertilizerPlanner location={locationDetails} />} />
          <Route path="/yield-prediction" element={<YieldPrediction location={locationDetails} />} />
          <Route path="/weather-insights" element={<WeatherInsights location={locationDetails} />} />
          <Route path="/pest-control" element={<PestControl location={locationDetails} />} />
          <Route path="/market-prices" element={<MarketPrices location={locationDetails} />} />
          <Route path="/farm-equipment" element={<FarmEquipment location={locationDetails} />} />
          <Route path="/labor-management" element={<LaborManagement location={locationDetails} />} />
          <Route path="/financial-reports" element={<FinancialReports location={locationDetails} />} />
          <Route path="/iot-sensors" element={<IoTSensors location={locationDetails} />} />
          <Route path="/field-mapping" element={<FieldMapping location={locationDetails} />} />
          <Route path="/sustainability" element={<Sustainability location={locationDetails} />} />
          <Route path="/settings" element={<Settings location={locationDetails} onSetLocation={handleSetUserLocation} />} />
          <Route path="/help-support" element={<HelpSupport location={locationDetails} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
