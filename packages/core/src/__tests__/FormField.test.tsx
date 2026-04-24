import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormField } from '../components/FormField';

describe('FormField', () => {
  it('renders with children', () => {
    render(
      <FormField>
        <input type="text" data-testid="input" />
      </FormField>
    );
    expect(screen.getByTestId('input')).toBeDefined();
  });

  it('renders label with required indicator', () => {
    render(
      <FormField label="Username" required>
        <input type="text" />
      </FormField>
    );
    const label = screen.getByText('Username');
    expect(label).toBeDefined();
    expect(label.className).toContain('brut-formfield__label--required');
  });

  it('renders hint text', () => {
    render(
      <FormField hint="Please enter your username">
        <input type="text" />
      </FormField>
    );
    expect(screen.getByText('Please enter your username')).toBeDefined();
  });

  it('renders error message and overrides hint', () => {
    render(
      <FormField hint="Please enter your username" error="Username is required">
        <input type="text" />
      </FormField>
    );
    expect(screen.getByText('Username is required')).toBeDefined();
    expect(screen.queryByText('Please enter your username')).toBeNull();
  });

  it('applies structural classes', () => {
    const { container } = render(
      <FormField size="lg" fullWidth disabled>
        <input type="text" />
      </FormField>
    );
    const div = container.querySelector('.brut-formfield');
    expect(div?.className).toContain('brut-formfield--lg');
    expect(div?.className).toContain('brut-formfield--full');
    expect(div?.className).toContain('brut-formfield--disabled');
  });
});
