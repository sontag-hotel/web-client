import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DetailPage from './DetailPage';
import Home from './Home';
import MainPage from './MainPage';
import Signup from './Signup';
import ThemePage from './ThemePage';
import Welcome from './Welcome';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MainPage />} />
          <Route path=":theme" element={<ThemePage />} />
        </Route>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
