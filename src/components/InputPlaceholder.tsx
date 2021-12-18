import {FC} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';

import {SearchIcon} from 'icons';
import {colors} from 'styles';
type InputPlaceholderProps = {
  text: string;
  width: number;
  fullWidth?: boolean;
};
const InputPlaceholder: FC<InputPlaceholderProps> = ({
  text,
  width,
  fullWidth,
}) => {
  return (
    <Container width={width} fullWidth={!!fullWidth}>
      <SearchIcon />
      <span>{text}</span>
    </Container>
  );
};

export default InputPlaceholder;

const Container = styled.div<{width: number; fullWidth: boolean}>`
  display: flex;
  align-items: center;
  justify-self: center;
  color: ${colors.textSecondary};
  width: ${({width, fullWidth}) => (fullWidth ? '100%' : `${width}rem`)};
  height: 4.6rem;
  border: 1px solid ${colors.accent};
  padding-left: 1.5rem;
  border-radius: 1rem;
  font-weight: 500;
  font-size: 1.6rem;
  background: ${colors.backgroundGray};
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
