import {FC} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from 'styles';
import ProfileCircle from './ProfileCircle';

type ProfileWelcomeProps = {
  desc: string;
  name: string;
};
const ProfileWelcome: FC<ProfileWelcomeProps> = ({desc, name}) => {
  return (
    <Container>
      <ProfileCircle size={'large'} lineColor={colors.accent} />
      <Info>
        <Text>{desc}</Text>
        <Text>
          <Name>{name}</Name>님
        </Text>
      </Info>
      <Text>환영해요! 😄</Text>
    </Container>
  );
};
export default ProfileWelcome;
const Info = styled.div``;
const Text = styled.div``;
const Name = styled.span``;
const Container = styled.div`
  margin-top: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  ${Info} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  ${Text} {
    font-weight: bold;
    font-size: 2.4rem;
    color: ${colors.text};
    ${Name} {
      color: ${colors.accent};
    }
  }
`;
