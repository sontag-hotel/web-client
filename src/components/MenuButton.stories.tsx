import {ComponentStory, ComponentMeta} from '@storybook/react';
import MenuButton from './MenuButton';
import {CupIcon, HomeIcon, SearchIcon, UserIcon} from 'icons';
import {ReactNode} from 'react';
const Icons = {CupIcon, HomeIcon, SearchIcon, UserIcon};
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
    // onClick: {action: 'clicked'},
  },
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = ({Icon, ...args}) => {
  return <MenuButton {...args} Icon={Icon}></MenuButton>;
};
export const CafeCollection = Template.bind({});
export const Home = Template.bind({});
export const Search = Template.bind({});
export const My = Template.bind({});

CafeCollection.args = {
  text: '카페컬렉션',
  Icon: <CupIcon />,
};
Home.args = {
  text: '홈',
  Icon: <HomeIcon />,
};
Search.args = {
  Icon: <SearchIcon />,
  text: '탐색',
};
My.args = {
  text: 'My',
  Icon: <UserIcon />,
};
