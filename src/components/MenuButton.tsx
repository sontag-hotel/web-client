import {FC, MouseEventHandler, ReactNode} from 'react';
import styled from 'styled-components';
import {colors} from 'styles';

type MenuButtonProps = {
  Icon: ReactNode;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};
const MenuButton: FC<MenuButtonProps> = ({Icon, text, onClick}) => {
  return (
    <Container onClick={onClick}>
      {Icon}
      <span>{text}</span>
    </Container>
  );
};

export default MenuButton;

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${colors.primary};
  font-weight: 500;
  font-size: 1.6rem;
  width: fit-content;
  padding: 0;
  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: ${colors.primary};
    margin-bottom: 0.5rem;
  }
`;
