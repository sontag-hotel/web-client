import {Meta, ComponentStory} from '@storybook/react';

import Map from './Map';
export default {
  title: 'Sontag/Map',
  component: Map,
} as Meta;

const Template: ComponentStory<typeof Map> = () => <Map />;

export const Primary = Template.bind({});
