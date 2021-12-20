import {useReactiveVar} from '@apollo/client';
import {isOpenBackgroundVar} from 'stores/cafe';
import styled from 'styled-components';

type TProps = {
  visible: string;
};
type TBackgroundProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const SBackground = styled.div`
  display: ${(props: TProps) => props.visible};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;

export default function Background({onClick}: TBackgroundProps) {
  const isOpenBackground = useReactiveVar(isOpenBackgroundVar);

  return (
    <SBackground
      visible={isOpenBackground ? 'block' : 'none'}
      onClick={onClick}
    />
  );
}
