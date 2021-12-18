import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input from './Input';
export default {
  title: 'Sontag/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  return <Input {...args} />;
};
export const BasicInput = Template.bind({});
BasicInput.args = {
  label: '이름',
  value: '',
};
export const ActiveInput = Template.bind({});
ActiveInput.args = {
  label: '이름',
  value: '김멍멍',
};
