import Dashboard from './page/dashboard';
import Main from './page/main';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </Router>
  );
}

export default App;
