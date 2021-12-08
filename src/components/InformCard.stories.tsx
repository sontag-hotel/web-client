import {ComponentMeta, ComponentStory} from '@storybook/react';
import InformCard from './InformCard';

export default {
  title: 'Sontag/InformCard',
  component: InformCard,
} as ComponentMeta<typeof InformCard>;

const Template: ComponentStory<typeof InformCard> = args => (
  <InformCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  title: '커피앤시가렛',
  address: '서울 중구 서소문로 116 유원빌딩 17층',
};
