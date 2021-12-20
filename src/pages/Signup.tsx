import Profile from 'components/ProfileInput';
import ProfileLayout from 'components/ProfileLayout';
// import {useSignupMutation} from 'generated/graphql';

import {ChangeEventHandler, FC, useState} from 'react';
import {
  // Navigate,
  //   useLocation,
  useNavigate,
} from 'react-router-dom';

const Signup: FC = () => {
  //   const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    desc: '',
  });
  const {name, desc} = state;
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setState({...state, [e.target.name]: e.target.value});
  };

  //   const [mutation, {data}] = useSignupMutation({
  //     variables: {
  //       input: {name, introductionDesc: desc},
  //       accessToken: location.state,
  //     },
  //   });

  const handleClick = () => {
    //   mutation();
  };

  //   if (data)
  //     return (
  //       <Navigate
  //         to="/welcome"
  //         state={{token: data.signup.token, me: data.signup.me}}
  //         replace
  //       />
  //     );

  return (
    <ProfileLayout
      buttonText="확인"
      disabled={!name || !desc}
      onBackClick={() => {
        navigate(-1);
      }}
      onSubmitClick={handleClick}
    >
      <Profile name={name} desc={desc} onChange={handleChange} />
    </ProfileLayout>
  );
};

export default Signup;
