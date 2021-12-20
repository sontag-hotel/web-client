import {makeVar} from '@apollo/client';
import {CafeQuery, Theme} from 'generated/graphql';

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
export const cafeListVar = makeVar<CafeQuery['Cafe']>([] as CafeQuery['Cafe']);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const kakaoMapVar = makeVar<any>(null);
