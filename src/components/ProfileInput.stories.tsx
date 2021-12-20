import {ComponentStory, ComponentMeta} from '@storybook/react';
import ProfileInput from './ProfileInput';
export default {
  title: 'Sontag/ProfileInput',
  component: ProfileInput,
  argTypes: {},
} as ComponentMeta<typeof ProfileInput>;

const Template: ComponentStory<typeof ProfileInput> = ({...args}) => {
  return <ProfileInput {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  name: '',
  desc: '',
};
export const Active = Template.bind({});
Active.args = {
  name: '김멍멍',
  desc: '소개',
};
