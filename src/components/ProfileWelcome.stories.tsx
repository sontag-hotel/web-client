import {ComponentStory, ComponentMeta} from '@storybook/react';
import ProfileWelcome from './ProfileWelcome';
export default {
  title: 'Sontag/ProfileWelcome',
  component: ProfileWelcome,
  argTypes: {},
} as ComponentMeta<typeof ProfileWelcome>;

const Template: ComponentStory<typeof ProfileWelcome> = ({...args}) => {
  return <ProfileWelcome {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  desc: '송리단길 2년차',
  name: '김멍멍',
};
