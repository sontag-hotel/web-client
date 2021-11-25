import {ComponentStory, ComponentMeta} from '@storybook/react';
import Modal from './Modal';
export default {
  title: 'Sontag/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({...args}) => {
  return <Modal {...args}></Modal>;
};
export const OpenedModal = Template.bind({});

OpenedModal.args = {};
