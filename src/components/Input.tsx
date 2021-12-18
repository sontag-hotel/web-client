import {FC, InputHTMLAttributes, useCallback, useState} from 'react';
import styled from 'styled-components';

import 'styled-components/macro';
import {colors} from 'styles';

type InputProps = {
  label: string;
  value: string;
  name: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
};
const Input: FC<InputProps> = ({label, value, name, onChange}) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);
  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);
  return (
    <Container focus={focus}>
      <label>{label}</label>
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};

export default Input;

const Container = styled.div<{focus: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  > label {
    font-weight: 600;
    font-size: 1.8rem;
    color: ${({focus}) => (focus ? colors.accent : colors.textSecondary)};
  }
  > input {
    font-weight: 600;
    font-size: 2.4rem;
    color: #000000;
    appearance: none;
    border: none;
    border-bottom: 2px solid ${colors.border};
    padding: 0;
    padding-bottom: 0.7rem;
    margin: 0;
    :focus {
      outline: none;
      border-bottom: 2px solid ${colors.accent};
    }
  }
`;
