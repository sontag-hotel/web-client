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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

/** cafe */
export type Cafe = {
  __typename?: 'Cafe';
  /** object id */
  _id: Scalars['String'];
  contact: Scalars['String'];
  created_at: Scalars['DateTime'];
  info: Info;
  location: Location;
  name: Scalars['String'];
  theme: Array<Theme>;
  updated_at: Scalars['DateTime'];
};

/** cafe card */
export type CafeCard = {
  __typename?: 'CafeCard';
  /** object id */
  _id: Scalars['String'];
  cafeUserList: CafeUserList;
  contact: Scalars['String'];
  created_at: Scalars['DateTime'];
  info: Info;
  location: Location;
  name: Scalars['String'];
  theme: Array<Theme>;
  updated_at: Scalars['DateTime'];
};

/** cafe_users */
export type CafeUser = {
  __typename?: 'CafeUser';
  /** object id */
  _id: Scalars['String'];
  cafeId: Scalars['String'];
  created_at: Scalars['DateTime'];
  theme: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
};

/** cafe.cafeUserList */
export type CafeUserList = {
  __typename?: 'CafeUserList';
  count: Scalars['Float'];
  userList: Array<CafeUser>;
};

/** New cafe create mutation args */
export type CreateCafeArgs = {
  address?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Array<Day>>;
  endTime?: InputMaybe<Scalars['String']>;
  locationX?: InputMaybe<Scalars['Float']>;
  locationY?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Theme>;
};

export type Credential = {
  __typename?: 'Credential';
  me: Me;
  token: Scalars['String'];
};

export enum Day {
  Fri = 'FRI',
  Mon = 'MON',
  Sat = 'SAT',
  Sun = 'SUN',
  Thu = 'THU',
  Tue = 'TUE',
  Wed = 'WED',
}

/** cafe.info */
export type Info = {
  __typename?: 'Info';
  address: Scalars['String'];
  workTime: WorkTime;
};

/** cafe.location */
export type Location = {
  __typename?: 'Location';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Me = {
  __typename?: 'Me';
  _id: Scalars['String'];
  /** 소개 */
  introductionDesc: Scalars['String'];
  /** 이름 */
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCafe: Cafe;
  loginKakao: Credential;
  signup: Credential;
  updateProfile: Me;
};

export type MutationCreateCafeArgs = {
  args: CreateCafeArgs;
};

export type MutationLoginKakaoArgs = {
  code: Scalars['String'];
  redirectURI: Scalars['String'];
};

export type MutationSignupArgs = {
  accessToken: Scalars['String'];
  input: NewAccountInput;
};

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type NewAccountInput = {
  /** 소개 */
  introductionDesc: Scalars['String'];
  /** 이름 */
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllCafe: Array<Cafe>;
  getCafe?: Maybe<Array<CafeCard>>;
  me: Me;
};

export type QueryGetCafeArgs = {
  theme: Theme;
};

export enum Theme {
  Mood = 'MOOD',
  Taste = 'TASTE',
  Work = 'WORK',
}

export type UpdateProfileInput = {
  /** 수정할 소개 */
  introductionDesc?: InputMaybe<Scalars['String']>;
  /** 수정할 이름 */
  name?: InputMaybe<Scalars['String']>;
};

/** cafe.info.workTime */
export type WorkTime = {
  __typename?: 'WorkTime';
  day: Array<Day>;
  endTime?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
};

export type GetAllCafeQueryVariables = Exact<{[key: string]: never}>;

export type GetAllCafeQuery = {
  __typename?: 'Query';
  getAllCafe: Array<{
    __typename?: 'Cafe';
    _id: string;
    name: string;
    contact: string;
    theme: Array<Theme>;
    info: {__typename?: 'Info'; address: string};
    location: {__typename?: 'Location'; x: number; y: number};
  }>;
};

export type CafeQueryVariables = Exact<{
  theme: Theme;
}>;

export type CafeQuery = {
  __typename?: 'Query';
  getCafe?:
    | Array<{
        __typename?: 'CafeCard';
        _id: string;
        name: string;
        contact: string;
        theme: Array<Theme>;
        info: {__typename?: 'Info'; address: string};
        location: {__typename?: 'Location'; x: number; y: number};
      }>
    | null
    | undefined;
};

export type LoginKakaoMutationVariables = Exact<{
  code: Scalars['String'];
  redirectUri: Scalars['String'];
}>;

export type LoginKakaoMutation = {
  __typename?: 'Mutation';
  loginKakao: {
    __typename?: 'Credential';
    token: string;
    me: {__typename?: 'Me'; name: string; introductionDesc: string};
  };
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
    me: {__typename?: 'Me'; name: string; introductionDesc: string};
  };
};

export type MeQueryVariables = Exact<{[key: string]: never}>;

export type MeQuery = {
  __typename?: 'Query';
  me: {__typename?: 'Me'; name: string; introductionDesc: string};
};

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;

export type UpdateProfileMutation = {
  __typename?: 'Mutation';
  updateProfile: {__typename?: 'Me'; name: string; introductionDesc: string};
};

export const GetAllCafeDocument = gql`
  query GetAllCafe {
    getAllCafe {
      _id
      name
      info {
        address
      }
      contact
      location {
        x
        y
      }
      theme
    }
  }
`;

/**
 * __useGetAllCafeQuery__
 *
 * To run a query within a React component, call `useGetAllCafeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCafeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCafeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCafeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllCafeQuery,
    GetAllCafeQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetAllCafeQuery, GetAllCafeQueryVariables>(
    GetAllCafeDocument,
    options
  );
}
export function useGetAllCafeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllCafeQuery,
    GetAllCafeQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetAllCafeQuery, GetAllCafeQueryVariables>(
    GetAllCafeDocument,
    options
  );
}
export type GetAllCafeQueryHookResult = ReturnType<typeof useGetAllCafeQuery>;
export type GetAllCafeLazyQueryHookResult = ReturnType<
  typeof useGetAllCafeLazyQuery
>;
export type GetAllCafeQueryResult = Apollo.QueryResult<
  GetAllCafeQuery,
  GetAllCafeQueryVariables
>;
export const CafeDocument = gql`
  query Cafe($theme: Theme!) {
    getCafe(theme: $theme) {
      _id
      name
      info {
        address
      }
      contact
      location {
        x
        y
      }
      theme
    }
  }
`;

/**
 * __useCafeQuery__
 *
 * To run a query within a React component, call `useCafeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCafeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCafeQuery({
 *   variables: {
 *      theme: // value for 'theme'
 *   },
 * });
 */
export function useCafeQuery(
  baseOptions: Apollo.QueryHookOptions<CafeQuery, CafeQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<CafeQuery, CafeQueryVariables>(CafeDocument, options);
}
export function useCafeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CafeQuery, CafeQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<CafeQuery, CafeQueryVariables>(
    CafeDocument,
    options
  );
}
export type CafeQueryHookResult = ReturnType<typeof useCafeQuery>;
export type CafeLazyQueryHookResult = ReturnType<typeof useCafeLazyQuery>;
export type CafeQueryResult = Apollo.QueryResult<CafeQuery, CafeQueryVariables>;
export const LoginKakaoDocument = gql`
  mutation LoginKakao($code: String!, $redirectUri: String!) {
    loginKakao(code: $code, redirectURI: $redirectUri) {
      token
      me {
        name
        introductionDesc
      }
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
        introductionDesc
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
      introductionDesc
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
export const UpdateProfileDocument = gql`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      name
      introductionDesc
    }
  }
`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >(UpdateProfileDocument, options);
}
export type UpdateProfileMutationHookResult = ReturnType<
  typeof useUpdateProfileMutation
>;
export type UpdateProfileMutationResult =
  Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;
