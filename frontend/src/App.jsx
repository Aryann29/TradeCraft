import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
      
        </Routes>
      </div>
    </Router>)}
export default App;
