import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import InformPage from './InformPage';
import DetailPage from './DetailPage';
import Welcome from 'pages/Welcome';
import Auth from './Auth';
import AuthProvider from 'auth/Auth';
import Signup from './Signup';

export default function Pages() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/my-inform" element={<InformPage />} />
          <Route path="/cafe-detail" element={<DetailPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
