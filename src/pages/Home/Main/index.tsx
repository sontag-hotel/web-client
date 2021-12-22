import ThemeBox, {Themes} from 'components/ThemeBox';
import HeaderContainer from 'containers/HeaderContainer';
import {useGetAllCafeQuery} from 'generated/graphql';
import {FC, useEffect} from 'react';
import {cafeListVar} from 'stores/cafe';
export const themeType: Themes = [
  {
    icon: '\u2615',
    text: '커피 맛집',
  },
  {
    icon: '\u{1F4F7}',
    text: '분위기 감성',
  },
  {
    icon: '\u{1F4BB}',
    text: '노트북 작업',
  },
];
const Main: FC = () => {
  const {data: allCafe} = useGetAllCafeQuery();
  useEffect(() => {
    if (allCafe) {
      cafeListVar(allCafe.getAllCafe);
    }
  }, [allCafe]);
  return (
    <>
      <HeaderContainer />
      <ThemeBox themes={themeType} />
    </>
  );
};

export default Main;
