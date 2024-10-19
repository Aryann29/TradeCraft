import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Funds from './pages/Funds';
import Trade from './pages/Trade';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { fetchStocks } from './redux/features/stocks/stocksSlice';
import { fetchUserPortfolio } from './redux/features/userPortfolio/userPortfolioSlice';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchStocks());
      dispatch(fetchUserPortfolio());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={isLoggedIn ? <HomePage /> : <LandingPage />} />
            <Route
              path="/login"
              element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" replace />}
            />
            <Route
              path="/register"
              element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" replace />}
            />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/funds"
              element={isLoggedIn ? <Funds /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/trade"
              element={isLoggedIn ? <Trade /> : <Navigate to="/login" replace />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;