import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from './Button';
export default {
  title: 'Sontag/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  return <Button {...args} />;
};
export const BasicButton = Template.bind({});
BasicButton.args = {
  color: '#ff673b',
  text: '네, 등록할게요!😆',
};
export const SecondButton = Template.bind({});
SecondButton.args = {
  color: '#C0C0C0',
  text: '한번 더 찾아볼게요🤔',
};
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  ...BasicButton.args,
  disabled: true,
};
