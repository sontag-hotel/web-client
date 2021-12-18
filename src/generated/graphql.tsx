import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cafe = {
  __typename?: 'Cafe';
  name: Scalars['String'];
};

export type Credential = {
  __typename?: 'Credential';
  me: Me;
  token: Scalars['String'];
};

export type Me = {
  __typename?: 'Me';
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  loginKakao: Credential;
  signup: Credential;
};

export type MutationLoginKakaoArgs = {
  code: Scalars['String'];
  redirectURI: Scalars['String'];
};

export type MutationSignupArgs = {
  accessToken: Scalars['String'];
  input: NewAccountInput;
};

export type NewAccountInput = {
  /** 소개 */
  introductionDesc: Scalars['String'];
  /** 이름 */
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cafeList: Cafe;
  me: Me;
};

export type LoginKakaoMutationVariables = Exact<{
  code: Scalars['String'];
  redirectUri: Scalars['String'];
}>;

export type LoginKakaoMutation = {
  __typename?: 'Mutation';
  loginKakao: {__typename?: 'Credential'; token: string};
};

export type SignupMutationVariables = Exact<{
  input: NewAccountInput;
  accessToken: Scalars['String'];
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup: {
    __typename?: 'Credential';
    token: string;
    me: {__typename?: 'Me'; name: string};
  };
};

export type MeQueryVariables = Exact<{[key: string]: never}>;

export type MeQuery = {
  __typename?: 'Query';
  me: {__typename?: 'Me'; name: string};
};

export const LoginKakaoDocument = gql`
  mutation LoginKakao($code: String!, $redirectUri: String!) {
    loginKakao(code: $code, redirectURI: $redirectUri) {
      token
    }
  }
`;
export type LoginKakaoMutationFn = Apollo.MutationFunction<
  LoginKakaoMutation,
  LoginKakaoMutationVariables
>;

/**
 * __useLoginKakaoMutation__
 *
 * To run a mutation, you first call `useLoginKakaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginKakaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginKakaoMutation, { data, loading, error }] = useLoginKakaoMutation({
 *   variables: {
 *      code: // value for 'code'
 *      redirectUri: // value for 'redirectUri'
 *   },
 * });
 */
export function useLoginKakaoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginKakaoMutation,
    LoginKakaoMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<LoginKakaoMutation, LoginKakaoMutationVariables>(
    LoginKakaoDocument,
    options
  );
}
export type LoginKakaoMutationHookResult = ReturnType<
  typeof useLoginKakaoMutation
>;
export type LoginKakaoMutationResult =
  Apollo.MutationResult<LoginKakaoMutation>;
export type LoginKakaoMutationOptions = Apollo.BaseMutationOptions<
  LoginKakaoMutation,
  LoginKakaoMutationVariables
>;
export const SignupDocument = gql`
  mutation Signup($input: NewAccountInput!, $accessToken: String!) {
    signup(input: $input, accessToken: $accessToken) {
      token
      me {
        name
      }
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      name
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
