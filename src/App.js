import React from 'react';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crop-analytics" element={<CropAnalytics />} />
          <Route path="/soil-management" element={<SoilManagement />} />
          <Route path="/irrigation-control" element={<IrrigationControl />} />
          <Route path="/fertilizer-planner" element={<FertilizerPlanner />} />
          <Route path="/yield-prediction" element={<YieldPrediction />} />
          <Route path="/weather-insights" element={<WeatherInsights />} />
          <Route path="/pest-control" element={<PestControl />} />
          <Route path="/market-prices" element={<MarketPrices />} />
          <Route path="/farm-equipment" element={<FarmEquipment />} />
          <Route path="/labor-management" element={<LaborManagement />} />
          <Route path="/financial-reports" element={<FinancialReports />} />
          <Route path="/iot-sensors" element={<IoTSensors />} />
          <Route path="/field-mapping" element={<FieldMapping />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help-support" element={<HelpSupport />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
