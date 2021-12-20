/* eslint-disable  @typescript-eslint/no-explicit-any */
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
export const markersVar = makeVar<any>([]);
export const cafeListVar = makeVar<Cafe[] | null>([] as Cafe[]);
export const kakaoMapVar = makeVar<any>(null);

export type Cafe = {
  _id: string;
  name: string;
  info: {__typename?: 'Info'; address: string};
  location: {__typename?: 'Location'; x: number; y: number};
  contact: string;
  theme: Array<Theme>;
};
