// import {useReactiveVar} from '@apollo/client';
import {FC} from 'react';
// import {isClickedThemeVar} from 'stores/cafe';
import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from '../styles';
import Theme, {themeType} from './Theme';

export type Themes = {
  icon: string;
  text: keyof typeof themeType;
}[];

type ThemeBoxProps = {themes: Themes};

const ThemeBox: FC<ThemeBoxProps> = ({themes}) => {
  // const isClickedTheme = useReactiveVar(isClickedThemeVar);

  return (
    <SThemeBox
    //  visible={isClickedTheme ? 'none' : 'flex'}
    >
      {themes.map(theme => (
        <Theme Icon={theme.icon} text={theme.text} key={theme.text} />
      ))}
    </SThemeBox>
  );
};

export default ThemeBox;

// type TProps = {
//   visible?: string;
// };
// display: ${(props: TProps) => props.visible};
const SThemeBox = styled.div`
  display: flex;
  background-color: ${colors.backgroundGray};
  height: 10rem;
  width: 100%;
  z-index: 2;
  box-shadow: 0rem 0.4rem 0.4rem 0.2rem rgba(179, 179, 179, 0.25);
`;
