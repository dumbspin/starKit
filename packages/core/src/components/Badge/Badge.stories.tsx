import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'danger', 'success', 'info', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    dot: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Urgent',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Completed',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'New Feature',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Draft',
  },
};

export const WithDot: Story = {
  args: {
    dot: true,
    children: 'Live',
  },
};

export const Large: Story = {
  args: {
    size: 'md',
    children: 'Large Badge',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Archived',
  },
};
