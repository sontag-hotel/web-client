import {ComponentMeta, ComponentStory} from '@storybook/react';
import Theme from './Theme';
import Theme_1 from 'assets/images/hot-beverage.png';
import Theme_2 from 'assets/images/camera.png';
import Theme_3 from 'assets/images/laptop.png';

export default {
  component: Theme,
  title: 'Sontag/Themebox',
} as ComponentMeta<typeof Theme>;
const Template: ComponentStory<typeof Theme> = ({...arg}) => <Theme {...arg} />;

export const Coffee = Template.bind({});
Coffee.args = {
  Icon: Theme_1,
  text: '커피 맛집',
};

export const Camera = Template.bind({});
Camera.args = {
  Icon: Theme_2,
  text: '분위기 감성',
};

export const Laptop = Template.bind({});
Laptop.args = {
  Icon: Theme_3,
  text: '노트북 작업',
};
