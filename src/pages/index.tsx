import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import InformPage from './InformPage';
import DetailPage from './DetailPage';

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my-inform" element={<InformPage />} />
        <Route path="/cafe-detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}
