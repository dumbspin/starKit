import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    hint: 'We will never share your email.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Username',
    placeholder: 'Username',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Message',
    placeholder: 'Type your message...',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Variant',
    placeholder: 'Transparent background',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Full Width Input',
    placeholder: 'Takes up all available space',
  },
};
