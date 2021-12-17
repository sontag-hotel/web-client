import styled from 'styled-components';
import {colors} from 'styles';

const SRegisterButton = styled.button`
  background-color: ${colors.background};
  border: 1px solid ${colors.accent};
  border-radius: 3rem;
  font-size: 1.4rem;
  color: ${colors.accent};
  font-weight: 500;
  padding: 0.5rem 1rem;
`;

export default function RegisterButton() {
  return <SRegisterButton>+ 카페등록</SRegisterButton>;
}
