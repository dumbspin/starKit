import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import React from 'react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'flat', 'inset'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'none'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ minHeight: '100px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 900 }}>Standard Card</h3>
        <p>This is a standard neo-brutalist card with a hard shadow.</p>
      </div>
    ),
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: (
      <div style={{ minHeight: '100px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 900 }}>Flat Card</h3>
        <p>A card with a border but no shadow.</p>
      </div>
    ),
  },
};

export const Inset: Story = {
  args: {
    variant: 'inset',
    children: (
      <div style={{ minHeight: '100px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 900 }}>Inset Card</h3>
        <p>A gray background card with no shadow, useful for nesting.</p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    onClick: () => alert('Card clicked!'),
    children: (
      <div style={{ minHeight: '100px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 900 }}>Clickable Card</h3>
        <p>Hover me to see the interactive shadow effect.</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: 'Card with large padding.',
  },
};

export const Disabled: Story = {
  args: {
    onClick: () => alert('Should not trigger'),
    disabled: true,
    children: (
      <div style={{ minHeight: '100px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 900 }}>Disabled Card</h3>
        <p>I am interactive but currently disabled.</p>
      </div>
    ),
  },
};
