import {ComponentStory, ComponentMeta} from '@storybook/react';
import Header from './Header';

export default {
  title: 'Sontag/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => {
  return <Header {...args} />;
};
export const Home = Template.bind({});
Home.args = {};
