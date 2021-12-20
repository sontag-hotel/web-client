import {FC, MouseEventHandler} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from 'styles';
import Button from './Button';
import Policy from './Policy';
import ProfileCircle from './ProfileCircle';

type ProfileModalContentProps = {
  desc: string;
  name: string;
  onEdit: MouseEventHandler<HTMLButtonElement>;
  onLogout: MouseEventHandler<HTMLButtonElement>;
};

const ProfileModalContent: FC<ProfileModalContentProps> = ({
  desc,
  name,
  onEdit,
  onLogout,
}) => {
  return (
    <Container>
      <ProfileCircle lineColor="#643A14" size="large" />
      <Info>
        {desc}
        <br />
        <span>{name}</span> 님
      </Info>
      <Buttons>
        <Button onClick={onEdit} color={colors.accent} text={'프로필 수정'} />
        <Button onClick={onLogout} color={colors.secondary} text={'로그아웃'} />
      </Buttons>
      <Policy />
    </Container>
  );
};
export default ProfileModalContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const Info = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 2.4rem;
  color: ${colors.text};
  > span {
    color: ${colors.accent};
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
