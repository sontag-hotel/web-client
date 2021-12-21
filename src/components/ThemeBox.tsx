import {useReactiveVar} from '@apollo/client';
import {isClickedThemeVar} from 'stores/cafe';
import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from '../styles';
import Theme, {themeType} from './Theme';

type TProps = {
  visible?: string;
};
type Themes = {
  icon: string;
  text: keyof typeof themeType;
};
const SThemeBox = styled.div`
  display: ${(props: TProps) => props.visible};
  background-color: ${colors.backgroundGray};
  height: 10rem;
  width: 100%;
  z-index: 2;
  box-shadow: 0rem 0.4rem 0.4rem 0.2rem rgba(179, 179, 179, 0.25);
`;

function ThemeBox() {
  const themes: Themes[] = [
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
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  return (
    <SThemeBox visible={isClickedTheme ? 'none' : 'flex'}>
      {themes.map(theme => (
        <Theme key={theme.text} Icon={theme.icon} text={theme.text} />
      ))}
    </SThemeBox>
  );
}

export default ThemeBox;
