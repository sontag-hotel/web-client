import {ComponentStory, ComponentMeta} from '@storybook/react';
import ProfileModalContent from './ProfileModalContent';

export default {
  title: 'Sontag/ProfileModalContent',
  component: ProfileModalContent,
  argTypes: {},
} as ComponentMeta<typeof ProfileModalContent>;

const Template: ComponentStory<typeof ProfileModalContent> = args => {
  return <ProfileModalContent {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  desc: 'hi',
  name: 'kim',
};
