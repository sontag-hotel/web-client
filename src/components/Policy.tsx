import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from 'styles';

const Policy = () => {
  return (
    <Container
      href="https://obvious-busby-416.notion.site/4fb89376bc634171a81c9cfe2dcefe71"
      target={'_blank'}
    >
      개인정보 처리방침
    </Container>
  );
};
export default Policy;
const Container = styled.a`
  font-weight: normal;
  font-size: 1.3rem;
  color: ${colors.textSecondary};
  cursor: pointer;
  text-decoration: none;
`;
