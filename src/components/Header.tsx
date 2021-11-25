import {FC} from 'react';
import styled from 'styled-components';
import InputPlaceholder from './InputPlaceholder';
import MenuButton, {MenuButtonProps} from './MenuButton';
import {colors} from 'styles';
type HeaderProps = {menus: MenuButtonProps[]};
const Header: FC<HeaderProps> = ({menus}) => {
  return (
    <Container>
      <InputPlaceholder text="어떤 카페를 찾으세요?" width={24.6} />
      <Grid>
        {menus.map(menu => (
          <MenuButton {...menu} />
        ))}
      </Grid>
    </Container>
  );
};

export default Header;
const Container = styled.header`
  width: 100%;
  height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.2rem;
  padding-right: 2.4rem;
  border-bottom: 1px solid ${colors.border};
`;
const Grid = styled.span`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, auto);
`;
