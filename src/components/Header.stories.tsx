import {ComponentStory, ComponentMeta} from '@storybook/react';
import Header from './Header';
import {UserIcon} from 'icons';
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
  menus: [{Icon: <UserIcon />, text: 'My', onClick: e => {}}],
};
export const Login = Template.bind({});
Login.args = {
  ...Home.args,
  menus: [
    {
      Icon: <ProfileCircle size={'small'} lineColor={colors.primary} />,
      text: 'My',
    },
  ],
};
