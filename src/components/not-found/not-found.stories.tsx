import { Meta, Story } from '@storybook/react';

import { NotFound } from './not-found';

const meta: Meta = {
  title: 'Components/NotFound',
  component: NotFound,
};

const Template: Story = () => <NotFound />;

export const Default = Template.bind({});

export default meta;
