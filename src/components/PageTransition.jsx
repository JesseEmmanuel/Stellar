import { useLocation } from 'react-router'
import { Routes, Route } from "react-router-dom";
import SidebarLayout from './SidebarLayout';

import Login from '../pages/Login'
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import GenStartup from '../pages/genealogy/StartupSavings';
import GenGreat from '../pages/genealogy/GreatSavings';
import GenLogs from '../pages/genealogy/Logs'
import WalletStartup from '../pages/wallet/StartupSavings'
import WalletGreat from '../pages/wallet/GreatSavings'
import History from '../pages/wallet/History';
import CheckRewards from '../pages/rewards/Check_Rewards';
import RedemptionHistory from '../pages/rewards/Redemption_History';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from '../contexts/Auth';



function PageTransition() {
const location = useLocation();

return (
<div className="layout-wrapper layout-content-navbar">
  <AnimatePresence>
    <div className="layout-container">
      <AuthProvider>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route element={<SidebarLayout />}>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/genealogy/StartupSavings' element={<GenStartup />}></Route>
          <Route path='/genealogy/GreatSavings' element={<GenGreat />}></Route>
          <Route path='/genealogy/Logs' element={<GenLogs />}></Route>
          <Route path='/wallet/StartupSavings' element={<WalletStartup />}></Route>
          <Route path='/wallet/GreatSavings' element={<WalletGreat />}></Route>
          <Route path='/wallet/History' element={<History />}></Route>
          <Route path='/rewards/Check_Rewards' element={<CheckRewards />}></Route>
          <Route path='/rewards/Redemption_History' element={<RedemptionHistory />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  </AnimatePresence>
</div>
)
}

export default PageTransition