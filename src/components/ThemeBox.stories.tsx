import {ComponentMeta, ComponentStory} from '@storybook/react';
import ThemeBox from './ThemeBox';

export default {
  component: ThemeBox,
  title: 'Sontag/Themebox',
} as ComponentMeta<typeof ThemeBox>;

const Template: ComponentStory<typeof ThemeBox> = () => <ThemeBox />;

export const Theme = Template.bind({});
