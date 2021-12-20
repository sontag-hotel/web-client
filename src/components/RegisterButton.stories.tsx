import {ComponentMeta, ComponentStory} from '@storybook/react';
import RegisterButton from './RegisterButton';

export default {
  component: RegisterButton,
  title: 'Sontag/RegisterButton',
} as ComponentMeta<typeof RegisterButton>;

const Template: ComponentStory<typeof RegisterButton> = args => (
  <RegisterButton {...args} />
);
export const Primary = Template.bind({});
