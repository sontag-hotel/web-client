import {Theme as ThemeType} from 'generated/graphql';
import {clickedThemeVar, isClickedThemeVar} from 'stores/cafe';
import styled from 'styled-components';
// import {clickedThemeVar, isClickedThemeVar} from 'stores/cafe';
import 'styled-components/macro';

type ITheme = {
  Icon: string;
  text: keyof typeof themeType;
};

const STheme = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: transparent;
  border: none;
  > span:first-child {
    font-size: 4rem;
    margin-bottom: 1.3rem;
  }
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

// const changeThemeType = (text: string): ThemeType => {
//   if (text === '커피 맛집') {
//     return ThemeType.Taste;
//   } else if (text === '분위기 감성') {
//     return ThemeType.Mood;
//   } else {
//     return ThemeType.Work;
//   }
// };
export const themeType = {
  '커피 맛집': ThemeType.Taste,
  '분위기 감성': ThemeType.Mood,
  '노트북 작업': ThemeType.Work,
};

export default function Theme({Icon, text}: ITheme) {
  const handleClickTheme = (text: keyof typeof themeType) => {
    isClickedThemeVar(true);
    clickedThemeVar(themeType[text]);
  };
  return (
    <STheme onClick={() => handleClickTheme(text)}>
      <span>{Icon}</span>
      <span>{text}</span>
    </STheme>
  );
}
