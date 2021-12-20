import {useReactiveVar} from '@apollo/client';
import {isOpenSearchInputVar, isSearchedVar, searchInputVar} from 'stores/cafe';
import styled from 'styled-components';
import {colors} from 'styles';

type TProps = {
  visible: string;
};
const SSearchInput = styled.div`
  display: ${(props: TProps) => props.visible};
  align-items: center;
  justify-content: space-around;
  width: 33.5rem;
  height: 4.6rem;
  border: 1px solid ${colors.accent};
  border-radius: 1rem;
  background: ${colors.backgroundGray};
  padding: 0.3rem 0.2rem;
  position: absolute;
  z-index: 5;
  top: 10%;
  > input:first-child {
    width: 27rem;
    height: 3rem;
    margin-right: 0.2rem;
    font-size: 1.5rem;
    background-color: ${colors.backgroundGray};
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
const SButton = styled.div`
  padding: 1.2rem 1.3rem;
  font-size: 1.3rem;
  background-color: ${colors.accent};
  font-weight: 500;
  color: ${colors.background};
  border-radius: 0.8rem;
`;

export default function SearchInput() {
  const isOpenSearchInput = useReactiveVar(isOpenSearchInputVar);
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchInputVar(e.target?.value);
    console.log(searchInputVar());
  };
  return (
    <SSearchInput visible={isOpenSearchInput ? 'flex' : 'none'}>
      <input type="text" onChange={handleSearchInput} autoFocus></input>
      <SButton onClick={() => isSearchedVar(true)}>검색</SButton>
    </SSearchInput>
  );
}
