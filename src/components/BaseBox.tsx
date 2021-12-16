import styled from 'styled-components';
import {colors} from 'styles';
import ProfileCircle from './ProfileCircle';

type BaseBoxChildren = {
  userList?: {thumbNail: string}[];
  userCount?: Number;
};

const SBaseBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  > div:last-child {
    font-size: 1.1rem;
    opacity: 0.5;
  }
`;
const SProfileImages = styled.div`
  width: 7rem;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`;

export default function BaseBox({userList, userCount}: BaseBoxChildren) {
  return (
    <SBaseBox>
      <SProfileImages>
        {userList?.map(e => (
          <ProfileCircle
            key={e.thumbNail}
            size="small"
            lineColor={colors.background}
            url={e.thumbNail}
          />
        ))}
      </SProfileImages>
      <div>{userCount}명의 테마등록</div>
    </SBaseBox>
  );
}
