import {login} from 'stores/auth';
import ProfileInput from 'components/ProfileInput';
import ProfileLayout from 'components/ProfileLayout';
import {useSignupMutation} from 'generated/graphql';
import {ChangeEventHandler, FC, useEffect, useState} from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

const Signup: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: '',
    desc: '',
  });
  const {name, desc} = state;

  const [mutation, {data}] = useSignupMutation({
    variables: {
      input: {name, introductionDesc: desc},
      accessToken: location.state as string,
    },
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setState(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = () => {
    mutation();
  };

  useEffect(() => {
    if (data) {
      login(data.signup.token, data.signup.me);
    }
  }, [data]);

  if (!location.state) return <Navigate to={'/'} replace />;

  if (data)
    return (
      <Navigate to="/welcome" state={{token: data.signup.token}} replace />
    );
  return (
    <ProfileLayout
      buttonText="확인"
      disabled={!name || !desc}
      onBackClick={() => {
        navigate(-1);
      }}
      onSubmitClick={handleSubmit}
    >
      <ProfileInput name={name} desc={desc} onChange={handleChange} />
    </ProfileLayout>
  );
};

export default Signup;
