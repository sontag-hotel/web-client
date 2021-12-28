import ThemeTitle from 'components/ThemeTitle';
import {useParams} from 'react-router-dom';

export default function ThemePage() {
  const {theme} = useParams();
  console.log(theme);
  return (
    <div>
      <ThemeTitle />
    </div>
  );
}
