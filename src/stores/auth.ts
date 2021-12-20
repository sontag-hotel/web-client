// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Kakao: any;

export const loginKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  });
};
export const login = (
  token: string,
  me: LoginKakaoMutation['loginKakao']['me']
) => {
  localStorage.setItem('token', token);
  tokenVar(token);
  localStorage.setItem('me', JSON.stringify(me));
  meVar(me);
};
export const logout = () => {
  localStorage.setItem('token', '');
  tokenVar('');
  localStorage.setItem('me', '');
  meVar(undefined);
};
export const update = (me: LoginKakaoMutation['loginKakao']['me']) => {
  localStorage.setItem('me', JSON.stringify(me));
  meVar(me);
};

export const tokenVar = makeVar(localStorage.getItem('token'));
export const meVar = makeVar<LoginKakaoMutation['loginKakao']['me']>(
  JSON.parse(localStorage.getItem('me') || JSON.stringify(''))
);
// export const login = makeVar((token: string) => {
//   localStorage.setItem('token', token);
// });
