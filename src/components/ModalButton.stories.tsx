import {ComponentMeta, ComponentStory} from '@storybook/react';
import {colors} from 'styles';
import ModalButton from './ModalButton';

export default {
  component: ModalButton,
  title: 'Sontag/ModalButton',
} as ComponentMeta<typeof ModalButton>;

const Template: ComponentStory<typeof ModalButton> = args => (
  <ModalButton {...args} />
);
export const Primary = Template.bind({});
export const AgainButton = Template.bind({});
Primary.args = {
  width: 25,
  height: 6.3,
  font_size: 1.8,
  background: colors.accent,
  text: '네, 등록할게요!😆',
};
AgainButton.args = {
  width: 25,
  height: 6.3,
  font_size: 1.8,
  background: colors.secondary,
  text: '한번 더 찾아볼게요🤔',
};
