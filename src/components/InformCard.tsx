import styled from 'styled-components';
import {colors} from 'styles';
import ProfileCircle from './ProfileCircle';

type InfromCardProps = {
  title: string;
  address: string;
  users?: string[] | undefined;
};

const SInformCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  width: 35rem;
  height: 15.2rem;
  border-radius: 1.5rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(149, 149, 149, 0.4);
  padding: 2rem;
  > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.5rem;
    > div:first-child {
      width: 6rem;
      margin-right: 1.4rem;
    }
    > div + span {
      font-size: 1.2rem;
      opacity: 0.5;
    }
  }
`;

const STitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.accent};
  margin-bottom: 1rem;
`;

const SAdress = styled.div`
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;
const SLine = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${colors.border};
  padding: 0.5rem 0;
`;

export default function InformCard({title, address, users}: InfromCardProps) {
  const lineColor = colors.background;

  //임시 데이터
  users = [
    'https://www.teahub.io/photos/full/268-2682794_funny-profile-pictures-cartoon.jpg',
  ];

  return (
    <SInformCard>
      <STitle>{title}</STitle>
      <SAdress>{address}</SAdress>
      <SLine />
      <div>
        {users.length > 0 && (
          <>
            <div>
              {users?.map(user => (
                <ProfileCircle size="small" lineColor={lineColor} />
              ))}
            </div>
            <span>{users.length}명의 테마등록</span>
          </>
        )}
        {users.length === 0 && <span>카페 등록버튼</span>}
      </div>
    </SInformCard>
  );
}
