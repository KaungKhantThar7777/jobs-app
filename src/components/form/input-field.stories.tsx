import { Meta, Story } from '@storybook/react';

import {
  InputField,
  InputFieldProps,
} from './input-field';

const meta: Meta = {
  title: 'Components/InputField',
  component: InputField,
};

const Template: Story<InputFieldProps> = (props) => (
  <InputField {...props} />
);

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'First name',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'First name',
  error: {
    type: 'required',
    message: 'This field is required',
  },
};

export default meta;
