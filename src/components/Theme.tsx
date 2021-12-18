import {isClickedThemeVar} from 'stores/cafe';
import styled from 'styled-components';
// import {clickedThemeVar, isClickedThemeVar} from 'stores/cafe';

type ITheme = {
  Icon: string;
  text: string;
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

export default function Theme({Icon, text}: ITheme) {
  // const handleClickTheme = (text: string) => {
  //   isClickedThemeVar(true);
  //   clickedThemeVar(text);
  //   console.log(clickedThemeVar());
  // };
  // onClick={() => handleClickTheme(text)}
  return (
    <STheme onClick={() => console.log(isClickedThemeVar())}>
      <span>{Icon}</span>
      <span>{text}</span>
    </STheme>
  );
}
