import {ComponentMeta, ComponentStory} from '@storybook/react';
import NoticeModal from './NoticeModal';

export default {
  component: NoticeModal,
  title: 'Sontag/NoticeModal',
} as ComponentMeta<typeof NoticeModal>;

const Template: ComponentStory<typeof NoticeModal> = args => (
  <NoticeModal {...args} />
);
export const Primary = Template.bind({});
