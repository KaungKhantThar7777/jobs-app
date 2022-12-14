import { PlusSquareIcon } from '@chakra-ui/icons';
import { Story, Meta } from '@storybook/react';

import { Link, LinkProps } from './link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
};

const Template: Story<LinkProps> = (props) => (
  <Link {...props} />
);

export const Default = Template.bind({});
Default.args = {
  href: 'https://google.com',
  children: 'Link',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Link',
  href: '/',
  icon: <PlusSquareIcon />,
};
export default meta;
