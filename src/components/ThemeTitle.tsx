import {BackIcon} from 'icons';
import styled from 'styled-components';
import {colors} from 'styles';
// import {useReactiveVar} from '@apollo/client';
import RegisterButton from './RegisterButton';
// import {
//   isClickedRegisterVar,
//   // isClickedThemeVar,
//   isOpenBackgroundVar,
//   isOpenSearchBarVar,
// } from 'stores/cafe';
import {useNavigate} from 'react-router-dom';

type TThemeTitle = {
  text: string;
  Icon: string;
  onRegisterClick: () => void;
};

export default function ThemeTitle({text, Icon, onRegisterClick}: TThemeTitle) {
  const navigate = useNavigate();
  // const isClickedRegister = useReactiveVar(isClickedRegisterVar);
  // const isClickedTheme = useReactiveVar(isClickedThemeVar);
  return (
    <SThemeTitle
    // visible={isClickedTheme ? 'flex' : 'none'}
    >
      <BackIcon
        onClick={() => {
          // isClickedThemeVar(false);
          navigate(-1);
        }}
      />
      <STitle
      // left={isClickedRegister ? '-40%' : '6.5%'}
      >{`${Icon} ${text}`}</STitle>
      {/* {isClickedRegister ? (
        <></>
      ) : ( */}
      <RegisterButton onClick={onRegisterClick} />
      {/* )} */}
    </SThemeTitle>
  );
}

// type TSThemeTitle = {
//   left: string;
// };
// type TProps = {
//   visible: string;
// };
/* display: ${(props: TProps) => props.visible}; */
/* left: ${(props: TSThemeTitle) => props.left}; */

const SThemeTitle = styled.div`
  z-index: 5;
  display: flex;
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
`;
