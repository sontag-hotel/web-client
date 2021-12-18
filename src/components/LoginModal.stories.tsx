import {ComponentStory, ComponentMeta} from '@storybook/react';
import LoginModal from './LoginModal';

export default {
  title: 'Sontag/LoginModal',
  component: LoginModal,
  argTypes: {},
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = args => {
  return <LoginModal {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {};
