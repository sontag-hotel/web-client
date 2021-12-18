import {gql} from '@apollo/client';

export const GET_ISCLIECKEDREGISTER = gql`
  query GetIsClickedRegister {
    isClickedRegister @client
  }
`;
export const GET_ISCLICKEDTHEME = gql`
  query IsClickedTheme {
    isClickedTheme @client
  }
`;
