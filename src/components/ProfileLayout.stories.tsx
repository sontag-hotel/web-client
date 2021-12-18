import {ComponentStory, ComponentMeta} from '@storybook/react';
import ProfileLayout from './ProfileLayout';
export default {
  title: 'Sontag/ProfileLayout',
  component: ProfileLayout,
  argTypes: {},
} as ComponentMeta<typeof ProfileLayout>;

const Template: ComponentStory<typeof ProfileLayout> = ({...args}) => {
  return <ProfileLayout {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  buttonText: '확인',
  disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true,
};
