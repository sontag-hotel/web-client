import {CloseIcon} from 'icons';
import {FC, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';
import {colors} from 'styles';
const modalRoot = document.getElementById('modal');
type ModalProps = {
  onClose?: () => void;
};
const Modal: FC<ModalProps> = ({onClose, children}) => {
  const el = useRef(document.createElement('div'));
  useEffect(() => {
    const _el = el.current;
    modalRoot?.appendChild(_el);
    return () => {
      modalRoot?.removeChild(_el);
    };
  }, []);
  return createPortal(
    <Container>
      <CloseIcon onClick={onClose} />
      {children}
    </Container>,
    el.current
  );
};
export default Modal;
const Container = styled.div`
  position: relative;
  background: ${colors.background};
  width: 32.2rem;
  height: 43.7rem;
  border-radius: 2rem;
  padding: 2.2rem 2.4rem;
  > svg:first-child {
    cursor: pointer;
    position: absolute;
    top: 2.2rem;
    right: 2.4rem;
    width: 2.1rem;
    height: 2.1rem;
    color: ${colors.primary};
    line {
      stroke: currentColor;
    }
    path {
      fill: currentColor;
    }
  }
`;
