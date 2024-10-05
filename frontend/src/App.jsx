import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard.jsx';
import Funds from './pages/Funds.jsx';
import Trade from './pages/Trade.jsx';
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/trade" element={<Trade />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App