import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import InformPage from './InformPage';
import DetailPage from './DetailPage';
import Welcome from 'pages/Welcome';
import Auth from './Auth';
import Signup from './Signup';
import EditProfile from './EditProfile';

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/my-inform" element={<InformPage />} />
        <Route path="/cafe-detail" element={<DetailPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
