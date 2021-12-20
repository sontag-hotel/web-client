import {ComponentStory, ComponentMeta} from '@storybook/react';
import KakaoButton from './KakaoButton';
export default {
  title: 'Sontag/KakaoButton',
  component: KakaoButton,
  argTypes: {},
} as ComponentMeta<typeof KakaoButton>;

const Template: ComponentStory<typeof KakaoButton> = args => {
  return <KakaoButton {...args} />;
};
export const BasicKakaoButton = Template.bind({});
BasicKakaoButton.args = {};
