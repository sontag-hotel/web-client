import {FC} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from 'styles';
import Button from './Button';

type RegisterModalContentProps = {};

const RegisterModalContent: FC<RegisterModalContentProps> = ({}) => {
  return (
    <Container>
      <Info>
        <span>☕️ 커피 맛집 테마</span>에
        <br />
        <Cafe>이월 커피로스터스 송파점</Cafe> 카페를
        <br />
        등록하시겠어요?
      </Info>
      <Buttons>
        <Button
          onClick={() => {}}
          color={colors.accent}
          text={'네, 등록할게요!😆'}
        />
        <Button
          onClick={() => {}}
          color={colors.secondary}
          text={'한더번 더 찾아볼게요🤔'}
        />
      </Buttons>
      <Notice>
        <strong>잠깐 !</strong>
        <br />
        하나의 테마에 3개의 카페를 등록할 수 있어요
        <br />
        벌써 3개를 다 등록했다면?
        <br />
        수정페이지로 이동돼요!
      </Notice>
    </Container>
  );
};
export default RegisterModalContent;
const Notice = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 1.4rem;
  > strong {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
const Cafe = styled.span``;

const Info = styled.p`
  margin: 0;
  text-align: center;
  font-weight: 500;
  font-size: 1.8rem;
  color: ${colors.text};
  > ${Cafe} {
    color: ${colors.accent};
  }
  > span {
    font-weight: 600;
  }
`;
