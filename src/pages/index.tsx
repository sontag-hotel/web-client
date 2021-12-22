import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import Main from './Home/Main';
import Theme from './Home/Theme';
import Signup from './Signup';
import Welcome from './Welcome';
import Profile from './Profile';
// import MainPage from './MainPage';
// import InformPage from './InformPage';
// import DetailPage from './DetailPage';
// import Welcome from 'pages/Welcome';
// import Auth from './Auth';
// import Signup from './Signup';
// import EditProfile from './EditProfile';

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path=":theme" element={<Theme />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/my-inform" element={<InformPage />} />
        <Route path="/cafe-detail" element={<DetailPage />} />
        <Route path="/" element={<MainPage />} /> */}
      </Routes>
    </Router>
  );
}
