import {DOMAttributes, FC, MouseEventHandler} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from 'styles';
import Button from './Button';
import {BackIcon} from 'icons';

type ProfileLayoutProps = {
  disabled?: boolean;
  buttonText: string;
  onBackClick: DOMAttributes<SVGSVGElement>['onClick'];
  onSubmitClick: MouseEventHandler<HTMLButtonElement>;
};
const ProfileLayout: FC<ProfileLayoutProps> = ({
  disabled,
  buttonText,
  children,
  onBackClick,
  onSubmitClick,
}) => {
  return (
    <Container>
      <div>
        <header>
          <BackIcon onClick={onBackClick} />
        </header>
        {children}
      </div>
      <footer>
        <Button
          text={buttonText}
          color={colors.accent}
          disabled={disabled}
          onClick={onSubmitClick}
        />
      </footer>
    </Container>
  );
};

export default ProfileLayout;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem 2rem;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    > header {
      > svg {
        width: 2.4rem;
        cursor: pointer;
      }
    }
  }
  > footer {
    display: flex;
    justify-content: center;
  }
`;
