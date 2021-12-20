import {DOMAttributes, FC} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import kakaobutton from 'assets/images/kakao_login_large_narrow.png';
type KakaoButtonProps = {
  onClick: DOMAttributes<HTMLButtonElement>['onClick'];
};

const KakaoButton: FC<KakaoButtonProps> = ({onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={kakaobutton} alt="kakaobutton" />
    </StyledButton>
  );
};

export default KakaoButton;

const StyledButton = styled.button`
  width: 24.9rem;
  height: 6.3rem;
  background-color: transparent;
  appearance: none;
  border: none;
  cursor: pointer;
  padding: 0;
  > img {
  }
`;
