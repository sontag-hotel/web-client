import {meVar, tokenVar, update} from 'stores/auth';
import Profile from 'components/ProfileInput';
import ProfileLayout from 'components/ProfileLayout';
import {useUpdateProfileMutation} from 'generated/graphql';
import {ChangeEventHandler, useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

const EditProfile = () => {
  const token = tokenVar();
  const me = meVar();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: me.name,
    desc: me.introductionDesc,
  });
  const {name, desc} = state;

  const [mutation, {data}] = useUpdateProfileMutation({
    variables: {
      input: {name, introductionDesc: desc},
    },
    context: {
      headers: {
        authorization: token,
      },
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
      update({
        name: data.updateProfile.name,
        introductionDesc: data.updateProfile.introductionDesc,
      });
      navigate('/', {state: {afterEdit: true}});
    }
  }, [data, navigate]);

  if (!token) return <Navigate to={'/'} replace />;
  return (
    <ProfileLayout
      buttonText="확인"
      disabled={!name || !desc}
      onBackClick={() => {
        navigate(-1);
      }}
      onSubmitClick={handleSubmit}
    >
      <Profile name={name} desc={desc} onChange={handleChange} />
    </ProfileLayout>
  );
};
export default EditProfile;
