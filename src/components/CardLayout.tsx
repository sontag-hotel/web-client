import styled from 'styled-components';
import {colors} from 'styles';

const SCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  width: 35rem;
  min-height: 15.2rem;
  border-radius: 1.5rem;
  box-shadow: 0.5rem 0.3rem 1rem 0.1rem rgba(149, 149, 149, 0.4);
  padding: 2rem;
  margin: 0.5rem 0;
`;
export default function CardLayout({children}: {children: React.ReactNode}) {
  return <SCardLayout>{children}</SCardLayout>;
}
