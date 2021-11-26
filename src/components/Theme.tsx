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
`;

const ThemeImg = styled.img`
  height: 4rem;
  margin-bottom: 5px;
`;

export default function Theme({Icon, text}: ITheme) {
  return (
    <STheme>
      <ThemeImg src={Icon} />
      <span>{text}</span>
    </STheme>
  );
}
