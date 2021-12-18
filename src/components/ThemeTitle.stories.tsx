import {ComponentMeta, ComponentStory} from '@storybook/react';
import {GET_ISCLIECKEDREGISTER} from 'stores/query';
import ThemeTitle from './ThemeTitle';

export default {
  component: ThemeTitle,
  title: 'Sontag/ThemeTitle',
} as ComponentMeta<typeof ThemeTitle>;

const Template: ComponentStory<typeof ThemeTitle> = args => (
  <ThemeTitle {...args} />
);
Template.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_ISCLIECKEDREGISTER,
        },
        result: {
          data: {
            isClickedRegister: true,
          },
        },
      },
    ],
  },
};
export const Coffee = Template.bind({});
export const Camera = Template.bind({});
export const Laptop = Template.bind({});
Coffee.args = {
  text: '커피 맛집',
  Icon: '\u2615',
};
Camera.args = {
  Icon: '\u{1F4F7}',
  text: '분위기 감성',
};
Laptop.args = {
  Icon: '\u{1F4BB}',
  text: '노트북 작업',
};
