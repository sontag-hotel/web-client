import styled from 'styled-components';
import {colors} from 'styles';

const SLine = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${colors.border};
  padding: 0.5rem 0;
`;

export default function Line() {
  return <SLine />;
}
