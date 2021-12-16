import styled from 'styled-components';
import {colors} from 'styles';

type CafeNameProps = {
  name: string;
};
const SCafeName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.accent};
  margin-bottom: 1rem;
`;

export default function CafeName({name}: CafeNameProps) {
  return <SCafeName>{name}</SCafeName>;
}
