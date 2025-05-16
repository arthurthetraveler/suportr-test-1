import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router';
import HomeLayout from './pages/home/HomeLayout';
import Home from './pages/home';
import MainContent from './pages/landingpageflow/chooseteam';
import Fan from './pages/landingpageflow/fan';
import CreateAccount from './pages/landingpageflow/createac';
import PaymentMethodPage from './pages/landingpageflow/paymentmethodpage';
import BillingDetailsPage from './pages/landingpageflow/billingdetailspage';
import ConnectWalletPage from './pages/landingpageflow/connectwallet';
import OrderSuccessfulPage from './pages/landingpageflow/ordersuccessfulpage';
import ChooseTeam from './pages/landingpageflow/chooseteam';
import CheckOut from './components/button/checkout';
import CheckoutPage from './pages/landingpageflow/checkoutpage';
import OrderPaymentPage from './pages/landingpageflow/orderpaymentcrypto';
import DashboardPanel from './components/panel/dashboardpanel';
import LoyaltyModal from './components/modal/loyaltypopup';
import CryptoSucessPage from './pages/landingpageflow/cryptosucess';
import CryptoFailPage from './pages/landingpageflow/cryptofail';
import PasswordGate from './pages/home/passwordat';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}> 
        <Route path="auth" element={<PasswordGate children={undefined} />} /> 
        <Route path="home" element={<Home />} />
        <Route path="choose-team" element={<ChooseTeam />} />
        <Route path="fan" element={<Fan />} />
        <Route path="createac" element={<CreateAccount/>} />
        <Route path="paymentmethodpage" element={<PaymentMethodPage/>} />
        <Route path="billingdetailspage" element={<BillingDetailsPage/>} />
        <Route path="connectwallet" element={<ConnectWalletPage/>} />
        <Route path='ordersuccessfulpage' element={<OrderSuccessfulPage/>} />
        <Route path="checkoutpage" element={<CheckoutPage/>} />
        <Route path="orderpaymentcrypto" element={<OrderPaymentPage/>} />
        <Route path="dashboardpanel" element={<DashboardPanel/>} />
        <Route path="cryptosucess" element={<CryptoSucessPage/>} />
        <Route path="cryptofail" element={<CryptoFailPage/>} />
        <Route path="auth" element={<PasswordGate children={undefined}/>} />
        
      </Route>
      {/* <Route path="about" element={<About />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route> */}
    </Routes>
  );
}

export default App;
