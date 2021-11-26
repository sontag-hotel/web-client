import styled from 'styled-components';
import {colors} from '../styles';
import Theme from './Theme';
import Theme_1 from 'assets/images/hot-beverage.png';
import Theme_2 from 'assets/images/camera.png';
import Theme_3 from 'assets/images/laptop.png';

const SThemeBox = styled.div`
  display: flex;
  background-color: ${colors.backgroundGray};
  height: 7rem;
  width: 100%;
  z-index: 2;
`;

function ThemeBox() {
  const themes = [
    {
      icon: Theme_1,
      text: '커피 맛집',
    },
    {
      icon: Theme_2,
      text: '분위기 감성',
    },
    {
      icon: Theme_3,
      text: '노트북 작업',
    },
  ];
  return (
    <SThemeBox>
      {themes.map(theme => (
        <Theme Icon={theme.icon} text={theme.text} />
      ))}
    </SThemeBox>
  );
}

export default ThemeBox;
