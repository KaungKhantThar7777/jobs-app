import { Meta, Story } from '@storybook/react';

import { Loading } from './loading';

const meta: Meta = {
  title: 'Components/Loading',
  component: Loading,
};
const Template: Story = () => <Loading />;

export const Default = Template.bind({});

export default meta;
