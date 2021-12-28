import {themes} from './ThemeBox';
type TThemeTitle = {
  themeNum: string | undefined;
};
export default function ThemeTitle({themeNum}: TThemeTitle) {
  return (
    <div>
      {themeNum && themes.filter(t => t.id === parseInt(themeNum[5]))[0].title}
    </div>
  );
}
