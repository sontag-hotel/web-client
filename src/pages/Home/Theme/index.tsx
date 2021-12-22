// import {useReactiveVar} from '@apollo/client';
import ThemeTitle from 'components/ThemeTitle';
import {useCafeQuery} from 'generated/graphql';
import {FC, useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {cafeListVar, isClickedRegisterVar} from 'stores/cafe';
import {Theme as ThemeType} from 'generated/graphql';
import InformCardBox from 'components/InformCardBox';
import CardLayout from 'components/CardLayout';
import CafeName from 'components/CafeName';
import Address from 'components/Address';
import Line from 'components/Line';
import {useReactiveVar} from '@apollo/client';
// import {clickedThemeVar} from 'stores/cafe';
const themeType = {
  TASTE: {
    text: '커피 맛집',
    icon: '\u2615',
  },
  MOOD: {
    text: '분위기 감성',
    icon: '\u{1F4F7}',
  },
  WORK: {
    text: '노트북 작업',
    icon: '\u{1F4BB}',
  },
};
const Theme: FC = () => {
  const cafeList = useReactiveVar(cafeListVar);
  // const clickedTheme = useReactiveVar(clickedThemeVar);

  const {theme} = useParams<{theme: string}>();

  const key: ThemeType | undefined = (theme && theme.toUpperCase()) as
    | ThemeType
    | undefined;
  const isThemePage = key && Object.keys(themeType).includes(key);

  const {data: cafe} = useCafeQuery({
    variables: {
      theme: key as ThemeType,
    },
    skip: !isThemePage,
  });

  useEffect(() => {
    if (cafe) {
      cafeListVar(cafe.getCafe);
    }
  }, [cafe]);

  if (!isThemePage) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <ThemeTitle
        text={themeType[key].text}
        Icon={themeType[key].icon}
        onRegisterClick={() => {
          isClickedRegisterVar(true);
          // isOpenSearchBarVar(true);
          // isOpenBackgroundVar(true);
        }}
      />
      <InformCardBox>
        {cafeList?.map(cafe => (
          <CardLayout key={cafe._id}>
            <CafeName name={cafe.name} />
            <Address address={cafe.info.address} />
            <Line />
          </CardLayout>
        ))}
      </InformCardBox>
    </>
  );
};

export default Theme;
