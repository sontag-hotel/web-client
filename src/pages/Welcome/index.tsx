import {tokenVar} from 'stores/auth';
import ProfileLayout from 'components/ProfileLayout';
import ProfileWelcome from 'components/ProfileWelcome';
import {useMeQuery} from 'generated/graphql';
import {FC} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

const Welcome: FC = () => {
  const token = tokenVar();
  const navigate = useNavigate();
  const {data} = useMeQuery({
    context: {
      headers: {Authorization: token},
    },
    skip: !token,
  });

  if (!token) {
    return <Navigate to="/" replace />;
  }
  if (data) {
    return (
      <ProfileLayout
        buttonText="손탁에서 카페 찾기"
        disabled={false}
        onBackClick={() => navigate(-1)}
        onSubmitClick={() => navigate('/')}
      >
        <ProfileWelcome desc={data.me.introductionDesc} name={data.me.name} />
      </ProfileLayout>
    );
  }
  return null;
};

export default Welcome;
