import {useReactiveVar} from '@apollo/client';
import {useEffect} from 'react';
import {
  isClickedRegisterVar,
  isClickedThemeVar,
  isOpenSearchInputVar,
} from 'stores/cafe';
import styled from 'styled-components';
import {colors} from 'styles';

type TRegisterButton = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
type TProps = {
  visible: string;
};
const SRegisterButton = styled.button`
  display: ${(props: TProps) => props.visible};
  background-color: ${colors.background};
  border: 1px solid ${colors.accent};
  border-radius: 3rem;
  font-size: 1.4rem;
  color: ${colors.accent};
  font-weight: 500;
  width: 8.7rem;
  height: 3rem;
  text-align: center;
`;

export default function RegisterButton({onClick}: TRegisterButton) {
  const isClickedRegister = useReactiveVar(isClickedRegisterVar);
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  const isOpenSearchInput = useReactiveVar(isOpenSearchInputVar);
  useEffect(() => {
    if (!isClickedTheme) {
      isClickedRegisterVar(false);
    }
    return;
  }, [isClickedTheme, isClickedRegister, isOpenSearchInput]);
  return (
    <SRegisterButton
      visible={isClickedRegister ? 'none' : 'block'}
      onClick={onClick}
    >
      + 카페등록
    </SRegisterButton>
  );
}
