import {ComponentStory, ComponentMeta} from '@storybook/react';
import LoginModalContent from './LoginModalContent';

export default {
  title: 'Sontag/LoginModalContent',
  component: LoginModalContent,
  argTypes: {},
} as ComponentMeta<typeof LoginModalContent>;

const Template: ComponentStory<typeof LoginModalContent> = args => {
  return <LoginModalContent {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {};
