import Map from 'components/Map';
import {Outlet} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Outlet />
      <Map />
    </div>
  );
}
