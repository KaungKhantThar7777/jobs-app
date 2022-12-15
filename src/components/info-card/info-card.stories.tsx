import { Meta, Story } from '@storybook/react';

import { InfoCard, InfoCardProps } from './info-card';

const meta: Meta = {
  title: 'Components/InfoCard',
  component: InfoCard,
};

const Template: Story<InfoCardProps> = (props) => (
  <InfoCard {...props} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  value: 'kaungkhantthar77@gmail.com',
};
export default meta;
