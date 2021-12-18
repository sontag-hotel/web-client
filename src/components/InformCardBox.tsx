import styled from 'styled-components';
import {useReactiveVar} from '@apollo/client';
import {cafeListVar, isClickedThemeVar} from 'stores/cafe';
import {gql, useQuery} from '@apollo/client';
import {useEffect} from 'react';

type Iprops = {
  visible: string;
};

const SInformCardBox = styled.div`
  display: ${(props: Iprops) => props.visible};
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 34rem;
  padding: 1.5rem;
  z-index: 2;
  position: fixed;
  bottom: 1%;
  overflow: auto;
`;
const GET_CAFES = gql`
  query GetCafes($theme: String!) {
    getCafe(theme: $theme) {
      _id
      name
      address
      workTime
      contact
      location
      theme
    }
  }
`;

export default function InformCardBox({children}: {children: React.ReactNode}) {
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  const {data} = useQuery(GET_CAFES);
  useEffect(() => {
    if (data) {
      cafeListVar(data);
    }
  }, [data]);

  return (
    <SInformCardBox visible={isClickedTheme ? 'flex' : 'none'}>
      {children}
    </SInformCardBox>
  );
}
