import {Back} from 'icons';
import styled from 'styled-components';
import {colors} from 'styles';
import {useQuery} from '@apollo/client';
import RegisterButton from './RegisterButton';
import {GET_ISCLIECKEDREGISTER} from 'stores/query';

type TProps = {
  text: string;
  Icon: string;
};
type TSThemeTitle = {
  left: string;
};
const SThemeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  width: 100%;
  height: 6rem;
  padding: 0.5rem 0.8rem;
`;
const STitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  position: relative;
  left: ${(props: TSThemeTitle) => props.left};
`;
export default function ThemeTitle({text, Icon}: TProps) {
  const {data} = useQuery(GET_ISCLIECKEDREGISTER);
  return (
    <SThemeTitle>
      <Back />
      <STitle
        left={data?.isClickedRegister ? '-40%' : '6.5%'}
      >{`${Icon} ${text}`}</STitle>
      {data?.isClickedRegister ? <></> : <RegisterButton />}
    </SThemeTitle>
  );
}
