import {FC, MouseEventHandler} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import {LogoBigIcon} from 'icons';
import {colors} from 'styles';
import KakaoButton from './KakaoButton';
import Policy from './Policy';

type LoginModalContentProps = {onLogin: MouseEventHandler<HTMLButtonElement>};

const LoginModalContent: FC<LoginModalContentProps> = ({onLogin}) => {
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
      <KakaoButton onClick={onLogin} />
      <Policy />
    </Container>
  );
};
export default LoginModalContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
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
