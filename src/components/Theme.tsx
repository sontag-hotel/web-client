import {Link} from 'react-router-dom';
import styled from 'styled-components';

type TTheme = {
  id: number;
  text: string;
  icon: string;
};
const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Theme({id, text, icon}: TTheme) {
  return (
    <Link to={`/theme${id}`}>
      <StyledTheme>
        <div>{icon}</div>
        <div>{text}</div>
      </StyledTheme>
    </Link>
  );
}
