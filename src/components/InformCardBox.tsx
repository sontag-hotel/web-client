import styled from 'styled-components';
// import {useReactiveVar} from '@apollo/client';
// import {isClickedThemeVar} from 'stores/cafe';

export default function InformCardBox({children}: {children: React.ReactNode}) {
  // const isClickedTheme = useReactiveVar(isClickedThemeVar);

  return (
    <SInformCardBox
    // visible={isClickedTheme ? 'flex' : 'none'}
    >
      {children}
    </SInformCardBox>
  );
}

// type Iprops = {
//   visible: string;
// };

/* display: ${(props: Iprops) => props.visible}; */
const SInformCardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 34rem;
  padding: 1.5rem;
  z-index: 2;
  position: fixed;
  bottom: 1%;
  overflow: auto;
`;
