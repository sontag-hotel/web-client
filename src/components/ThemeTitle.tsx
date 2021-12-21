import {BackIcon} from 'icons';
import styled from 'styled-components';
import {colors} from 'styles';
import {useReactiveVar} from '@apollo/client';
import RegisterButton from './RegisterButton';
import {
  isClickedRegisterVar,
  isClickedThemeVar,
  isOpenBackgroundVar,
  isOpenSearchBarVar,
} from 'stores/cafe';

type TThemeTitle = {
  text: string;
  Icon: string;
};
type TSThemeTitle = {
  left: string;
};
type TProps = {
  visible: string;
};
const SThemeTitle = styled.div`
  z-index: 5;
  display: ${(props: TProps) => props.visible};
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  width: 100%;
  height: 6rem;
  padding: 0.5rem 0.8rem;
  > svg:first-child {
    cursor: pointer;
  }
`;
const STitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  position: relative;
  left: ${(props: TSThemeTitle) => props.left};
`;
export default function ThemeTitle({text, Icon}: TThemeTitle) {
  const isClickedRegister = useReactiveVar(isClickedRegisterVar);
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  return (
    <SThemeTitle visible={isClickedTheme ? 'flex' : 'none'}>
      <BackIcon
        onClick={() => {
          isClickedThemeVar(false);
        }}
      />
      <STitle
        left={isClickedRegister ? '-40%' : '6.5%'}
      >{`${Icon} ${text}`}</STitle>
      {/* {isClickedRegister ? (
        <></>
      ) : ( */}
      <RegisterButton
        onClick={() => {
          isClickedRegisterVar(true);
          isOpenSearchBarVar(true);
          isOpenBackgroundVar(true);
        }}
      />
      {/* )} */}
    </SThemeTitle>
  );
}
