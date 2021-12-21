import {FC, useEffect} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';

import {SearchIcon} from 'icons';
import {colors} from 'styles';
import {useReactiveVar} from '@apollo/client';
import {isClickedThemeVar, isOpenSearchBarVar} from 'stores/cafe';
type InputPlaceholderProps = {
  text?: string;
  width?: number;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  visible?: string;
};

const InputPlaceholder: FC<InputPlaceholderProps> = ({
  text,
  width,
  fullWidth,
  onClick,
}) => {
  const isOpenSearchBar = useReactiveVar(isOpenSearchBarVar);
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  useEffect(() => {
    if (!isClickedTheme) {
      isOpenSearchBarVar(false);
    }
  }, [isClickedTheme]);
  return (
    <Container
      width={width}
      fullWidth={!!fullWidth}
      onClick={onClick}
      visible={isOpenSearchBar ? 'flex' : 'none'}
    >
      <SearchIcon />
      <span>{text}</span>
    </Container>
  );
};
export default InputPlaceholder;

const Container = styled.div`
  display: ${(props: InputPlaceholderProps) => props.visible};
  align-items: center;
  justify-self: center;
  color: ${colors.textSecondary};
  width: ${(props: InputPlaceholderProps) =>
    props.fullWidth ? '100%' : `${props.width}rem`};
  height: 4.6rem;
  border: 1px solid ${colors.accent};
  padding-left: 1.5rem;
  border-radius: 1rem;
  font-weight: 500;
  font-size: 1.6rem;
  background: ${colors.backgroundGray};
  cursor: auto;
  position: absolute;
  z-index: 5;
  top: 10%;
  svg {
    color: ${colors.accent};
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;
    line {
      stroke: currentColor;
    }
    path {
      fill: currentColor;
    }
  }
`;
