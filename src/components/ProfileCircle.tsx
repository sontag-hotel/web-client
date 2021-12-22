import {FC} from 'react';
import styled, {css} from 'styled-components';
import 'styled-components/macro';
import {colors} from 'styles';
const sizes = {
  small: css<ContainerProps>`
    width: 2.7rem;
    height: 2.7rem;
    ${({lineColor}) =>
      lineColor &&
      css`
        border: 2px solid ${lineColor};
        border-radius: 50%;
      `}
    > div {
      border: 2px solid ${colors.background};
    }
  `,
  medium: css<ContainerProps>`
    width: 2.7rem;
    height: 2.7rem;
    ${({lineColor}) =>
      lineColor &&
      css`
        border: 2px solid ${lineColor};
        border-radius: 50%;
      `}
    > div {
      border: 2px solid ${colors.background};
    }
  `,
  large: css<ContainerProps>`
    width: 10.2rem;
    height: 10.2rem;
    ${({lineColor}) =>
      lineColor &&
      css`
        border: 4px solid ${lineColor};
        border-radius: 50%;
      `}
    > div {
      border: 4px solid ${colors.background};
    }
  `,
};

type ProfileCircleProps = ContainerProps & {
  url?: string;
};
const ProfileCircle: FC<ProfileCircleProps> = ({size, url, lineColor}) => {
  return (
    <Container size={size} lineColor={lineColor}>
      <div>
        <img
          src={`${
            url ||
            'https://www.teahub.io/photos/full/268-2682794_funny-profile-pictures-cartoon.jpg'
          }`}
          alt={'유저프로필'}
          loading="lazy"
        />
      </div>
    </Container>
  );
};
export default ProfileCircle;
type ContainerProps = {
  size: keyof typeof sizes;
  lineColor?: string;
};
const Container = styled.span<ContainerProps>`
  display: inline-block;
  ${({size}) => sizes[size]}
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    > img {
      max-width: fit-content;
      height: 100%;
      /* width: ${props => sizes[props.size]}; */
      /* border-radius: 50%; */
    }
  }
`;
