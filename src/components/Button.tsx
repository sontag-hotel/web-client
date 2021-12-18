import {DOMAttributes, FC} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from 'styles';

type ButtonProps = {
  color: string;
  text: string;
  disabled?: boolean;
  onClick: DOMAttributes<HTMLButtonElement>['onClick'];
};

const Button: FC<ButtonProps> = ({color, text, disabled, onClick}) => {
  return (
    <Container color={color}>
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </Container>
  );
};

export default Button;

const Container = styled.div<{color: string}>`
  > button {
    width: 24.9rem;
    height: 6.3rem;
    border-radius: 0.7rem;
    font-weight: 600;
    font-size: 1.8rem;
    appearance: none;
    border: none;
    background: ${({color}) => color};
    color: #ffffff;
    cursor: pointer;
    :disabled {
      cursor: default;
      background: ${colors.backgroundGray};
    }
  }
`;
