import {ComponentStory, ComponentMeta} from '@storybook/react';
import {colors} from 'styles';
import ProfileCircle from './ProfileCircle';
export default {
  title: 'Sontag/ProfileCircle',
  component: ProfileCircle,
  argTypes: {},
} as ComponentMeta<typeof ProfileCircle>;

const Template: ComponentStory<typeof ProfileCircle> = ({...args}) => {
  return <ProfileCircle {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  size: 'small',
  url:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
  lineColor: colors.primary,
};
export const NoImage = Template.bind({});
NoImage.args = {
  size: 'small',
  lineColor: colors.primary,
};
