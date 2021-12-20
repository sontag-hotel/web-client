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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCafe: Cafe;
  loginKakao: Credential;
};

export type MutationCreateCafeArgs = {
  args: CreateCafeArgs;
};

export type MutationLoginKakaoArgs = {
  code: Scalars['String'];
  redirectURI: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Cafe?: Maybe<Array<Cafe>>;
  getAllCafe: Array<Cafe>;
};

export type QueryCafeArgs = {
  theme: Theme;
};

export enum Theme {
  Mood = 'MOOD',
  Taste = 'TASTE',
  Work = 'WORK',
}

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
  Cafe?:
    | Array<{
        __typename?: 'Cafe';
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
    Cafe(theme: $theme) {
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
 * const { data, loading, error } = useCafe({
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
