import {ComponentStory, ComponentMeta} from '@storybook/react';
import RegisterModalContent from './RegisterModalContent';

export default {
  title: 'Sontag/RegisterModalContent',
  component: RegisterModalContent,
  argTypes: {},
} as ComponentMeta<typeof RegisterModalContent>;

const Template: ComponentStory<typeof RegisterModalContent> = args => {
  return <RegisterModalContent {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {};
