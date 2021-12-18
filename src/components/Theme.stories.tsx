import {ComponentMeta, ComponentStory} from '@storybook/react';
import Theme from './Theme';
export default {
  component: Theme,
  title: 'Sontag/Theme',
} as ComponentMeta<typeof Theme>;
const Template: ComponentStory<typeof Theme> = ({...arg}) => <Theme {...arg} />;

export const Coffee = Template.bind({});
Coffee.args = {
  Icon: '\u2615',
  text: '커피 맛집',
};

export const Camera = Template.bind({});
Camera.args = {
  Icon: '\u{1F4F7}',
  text: '분위기 감성',
};

export const Laptop = Template.bind({});
Laptop.args = {
  Icon: '\u{1F4BB}',
  text: '노트북 작업',
};
