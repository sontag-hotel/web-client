import styled from 'styled-components';

type ITheme = {
  Icon: string;
  text: string;
};

const STheme = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: transparent;
  border: none;
  > span:first-child {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
  }
`;

export default function Theme({Icon, text}: ITheme) {
  return (
    <STheme>
      <span>{Icon}</span>
      <span>{text}</span>
    </STheme>
  );
}
//emoji 렌더하기
//gps 사용해서 내위치 조회
