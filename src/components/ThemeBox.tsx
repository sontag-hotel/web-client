import styled from 'styled-components';
import {colors} from '../styles';
import Theme from './Theme';

const SThemeBox = styled.div`
  display: flex;
  background-color: ${colors.backgroundGray};
  height: 10rem;
  width: 100%;
  z-index: 2;
`;

function ThemeBox() {
  const themes = [
    {
      icon: '\u2615',
      text: '커피 맛집',
    },
    {
      icon: '\u{1F4F7}',
      text: '분위기 감성',
    },
    {
      icon: '\u{1F4BB}',
      text: '노트북 작업',
    },
  ];

  return (
    <SThemeBox>
      {themes.map(theme => (
        <Theme Icon={theme.icon} text={theme.text} key={theme.icon} />
      ))}
    </SThemeBox>
  );
}

export default ThemeBox;
