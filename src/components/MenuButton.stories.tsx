import {ComponentStory, ComponentMeta} from '@storybook/react';
import MenuButton from './MenuButton';
import * as Icons from 'icons';
import {ReactNode} from 'react';

export default {
  title: 'Sontag/MenuButton',
  component: MenuButton,
  argTypes: {
    Icon: {
      options: Object.keys(Icons),
      mapping: Object.entries(Icons).reduce((obj, [key, Value]) => {
        obj[key] = <Value />;
        return obj;
      }, {} as {[key: string]: ReactNode}),
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = ({...args}) => {
  return <MenuButton {...args} />;
};
export const CafeCollection = Template.bind({});
export const Home = Template.bind({});
export const Search = Template.bind({});
export const My = Template.bind({});

CafeCollection.args = {
  Icon: <Icons.CupIcon />,
  text: '카페컬렉션',
};
Home.args = {
  Icon: <Icons.HomeIcon />,
  text: '홈',
};
Search.args = {
  Icon: <Icons.SearchIcon />,
  text: '탐색',
};
My.args = {
  Icon: <Icons.UserIcon />,
  text: 'My',
};
