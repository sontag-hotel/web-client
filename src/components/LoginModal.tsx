import {FC, MouseEventHandler} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import {LogoBigIcon} from 'icons';
import {colors} from 'styles';
import KakaoButton from './KakaoButton';

type LoginModalProps = {onClick: MouseEventHandler<HTMLButtonElement>};

const LoginModal: FC<LoginModalProps> = ({onClick}) => {
  return (
    <Container>
      <LogoBigIcon />
      <Info>
        <span>나만의 카페지도</span>를 쌓고
        <br />
        다른 사람의 카페지도를
        <br />
        저장할 수 있어요
      </Info>
      <KakaoButton onClick={onClick} />
      <Policy>개인정보 처리방침</Policy>
    </Container>
  );
};
export default LoginModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const Info = styled.p`
  margin: 0;
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${colors.primary};
  > span {
    color: ${colors.accent};
  }
`;
const Policy = styled.div`
  font-weight: normal;
  font-size: 1.3rem;
  color: ${colors.textSecondary};
`;
