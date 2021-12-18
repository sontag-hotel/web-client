import styled from 'styled-components';
import {colors} from 'styles';

type TProps = {
  width: number;
  height: number;
  font_size: number;
  text?: string;
  background: string;
};
const SModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.background};
  border-radius: 1rem;
  font-weight: 500;
  width: ${(props: TProps) => `${props.width}rem`};
  height: ${(props: TProps) => `${props.height}rem`};
  font-size: ${(props: TProps) => `${props.font_size}rem`};
  background-color: ${(props: TProps) => props.background};
`;

export default function ModalButton({
  width,
  height,
  font_size,
  text,
  background,
}: TProps) {
  return (
    <SModalButton
      width={width}
      height={height}
      font_size={font_size}
      background={background}
    >
      {text}
    </SModalButton>
  );
}
