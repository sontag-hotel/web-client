import {ComponentStory, ComponentMeta} from '@storybook/react';
import Header from './Header';
import {CupIcon, UserIcon} from 'icons';
import ProfileCircle from './ProfileCircle';
import {colors} from 'styles';

export default {
  title: 'Sontag/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => {
  return <Header {...args} />;
};
export const Home = Template.bind({});
Home.args = {
  menus: [
    {Icon: <CupIcon />, text: '카페컬랙션', onClick: e => {}},
    {Icon: <UserIcon />, text: 'My', onClick: e => {}},
  ],
};
export const Login = Template.bind({});
Login.args = {
  menus: [
    {Icon: <CupIcon />, text: '카페컬랙션'},
    {
      Icon: <ProfileCircle size={'small'} lineColor={colors.primary} />,
      text: 'My',
    },
  ],
};
