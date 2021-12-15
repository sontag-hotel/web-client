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
`;

export default function Theme({Icon, text}: ITheme) {
  return (
    <STheme>
      <span>{Icon}</span>
      <span>{text}</span>
    </STheme>
  );
}
