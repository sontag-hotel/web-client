import {makeVar} from '@apollo/client';
import {Theme} from 'generated/graphql';

export const isClickedThemeVar = makeVar(false);
export const clickedThemeVar = makeVar<Theme>(Theme.Taste);
export const isClickedRegisterVar = makeVar(false);
export const isClickedSearchInputvar = makeVar(false);
export const isOpenBackgroundVar = makeVar(false);
export const isOpenSearchBarVar = makeVar(false);
export const isOpenSearchInputVar = makeVar(false);
export const isSearchedVar = makeVar(false);
export const searchInputVar = makeVar('');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const markersVar = makeVar<any>([]);
export const cafeListVar = makeVar<Cafe[] | null>([] as Cafe[]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const kakaoMapVar = makeVar<any>(null);

type Cafe = {
  _id: string;
  name: string;
  info: {__typename?: 'Info'; address: string};
  location: {__typename?: 'Location'; x: number; y: number};
  contact: string;
  theme: Array<Theme>;
};
