import {ChangeEventHandler, FC} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import {colors} from 'styles';

import Input from './Input';
type ProfileProps = {
  name: string;
  desc: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
const Profile: FC<ProfileProps> = ({name, desc, onChange}) => {
  return (
    <>
      <Info>당신을 설명할 수 있는 이름과 한줄 소개를 입력해주세요 😊</Info>
      <Input name="name" label={'이름'} value={name} onChange={onChange} />
      <Input name="desc" label={'소개'} value={desc} onChange={onChange} />
      <Example>
        <div>
          사람들이 회원님의 어떤 분인지 잘 알 수 있도록 취향이나 정보를
          넣어주세요 :)
        </div>
        <div>
          예시를 참고해보세요
          <ul>
            <li>⭐⭐카페 바리스타</li>
            <li>성수동 토박이</li>
            <li>노트북없는 카공족</li>
          </ul>
        </div>
      </Example>
    </>
  );
};
export default Profile;
const Info = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 2.4rem;
  color: ${colors.text};
`;
const Example = styled.div`
  font-weight: normal;
  font-size: 1.4rem;
  color: #acacac;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ul {
    margin: 0;
  }
`;
