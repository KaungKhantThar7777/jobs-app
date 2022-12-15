import { Story, Meta } from '@storybook/react';

import { Content, ContentProps } from './content';

const meta: Meta = {
  title: 'Components/Content',
  component: Content,
};

const Template: Story<ContentProps> = (props) => (
  <Content {...props} />
);

export const Default = Template.bind({});
Default.args = {
  children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sit voluptate deserunt eius odio! Dolor dolore recusandae, voluptatem natus nulla officia perferendis repellendus modi eius architecto? Sint deserunt incidunt at cupiditate cum, eaque maxime quo iste dolor ratione id fugit eligendi, modi nobis facere reiciendis esse nemo illum. Dicta, quibusdam!`,
};

export default meta;
