import {FC} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import MenuButton, {MenuButtonProps} from './MenuButton';
import {colors} from 'styles';
import {LogoIcon} from 'icons';
import {isClickedThemeVar} from 'stores/cafe';
import {useReactiveVar} from '@apollo/client';
type HeaderProps = {menus: MenuButtonProps[]};
type TProps = {visible: string};
const Header: FC<HeaderProps> = ({menus}) => {
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  return (
    <Container visible={isClickedTheme ? 'none' : 'flex'}>
      <Title>
        <LogoIcon />
        손탁
      </Title>
      <Grid>
        {menus.map((menu, i) => (
          <MenuButton key={i} {...menu} />
        ))}
      </Grid>
    </Container>
  );
};

export default Header;
const Container = styled.header`
  width: 100%;
  height: 7.7rem;
  display: ${(props: TProps) => props.visible};
  align-items: center;
  justify-content: space-between;
  padding-left: 1.2rem;
  padding-right: 2.4rem;
  border-bottom: 1px solid ${colors.border};
  background-color: ${colors.background};
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 2.4rem;
  color: ${colors.primary};
`;
const Grid = styled.span`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, auto);
`;
