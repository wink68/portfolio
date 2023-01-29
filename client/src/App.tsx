import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/home';
import { Portfolio } from './pages/Portfolio/profile';
import { Profile } from './pages/Profile/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
