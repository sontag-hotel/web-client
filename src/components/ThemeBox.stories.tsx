import {ComponentMeta, ComponentStory} from '@storybook/react';
import ThemeBox from './ThemeBox';

export default {
  component: ThemeBox,
  title: 'Sontag/Themebox',
} as ComponentMeta<typeof ThemeBox>;

const Template: ComponentStory<typeof ThemeBox> = args => (
  <ThemeBox {...args} />
);

export const Theme = Template.bind({});
Theme.args = {
  themes: [
    {
      icon: '\u2615',
      text: '커피 맛집',
    },
    {
      icon: '\u{1F4F7}',
      text: '분위기 감성',
    },
    {
      icon: '\u{1F4BB}',
      text: '노트북 작업',
    },
  ],
};
