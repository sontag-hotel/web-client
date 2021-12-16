import styled from 'styled-components';

type AddressProps = {
  address: string;
};
const SAddress = styled.div`
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

export default function Address({address}: AddressProps) {
  return <SAddress>{address}</SAddress>;
}
