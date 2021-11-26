import {ComponentStory, ComponentMeta} from '@storybook/react';
import InputPlaceholder from './InputPlaceholder';

export default {
  title: 'Sontag/InputPlaceholder',
  component: InputPlaceholder,
  argTypes: {},
} as ComponentMeta<typeof InputPlaceholder>;

const Template: ComponentStory<typeof InputPlaceholder> = args => {
  return <InputPlaceholder {...args} />;
};
export const SearchBar = Template.bind({});
SearchBar.args = {
  text: '어떤 카페를 찾으세요?',
  width: 24.6,
};
