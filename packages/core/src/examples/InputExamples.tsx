import React from 'react';
import { Input } from '../components/Input';
import { Card } from '../components/Card';

export const InputExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '40px' }}>
      <section>
        <h2 style={{ marginBottom: '16px', fontWeight: 900 }}>Basic Inputs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <Input label="Default Input" placeholder="Type something..." />
          <Input label="Small Input" size="sm" placeholder="Small size" />
          <Input label="Large Input" size="lg" placeholder="Large size" />
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '16px', fontWeight: 900 }}>States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <Input
            label="Input with Hint"
            placeholder="Search..."
            hint="Enter at least 3 characters"
          />
          <Input
            label="Input with Error"
            placeholder="Email"
            error="Please enter a valid email address"
            defaultValue="invalid-email"
          />
          <Input
            label="Disabled Input"
            placeholder="You can't type here"
            disabled
            defaultValue="Locked content"
          />
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '16px', fontWeight: 900 }}>Prefix & Suffix</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <Input
            label="Price"
            placeholder="0.00"
            prefix={<span style={{ fontWeight: 900 }}>$</span>}
          />
          <Input
            label="Username"
            placeholder="yourname"
            suffix={<span style={{ opacity: 0.5 }}>.starkit</span>}
          />
          <Input
            label="Search"
            placeholder="Search components..."
            prefix={<span>🔍</span>}
            suffix={<span>⌘K</span>}
          />
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '16px', fontWeight: 900 }}>In a Card</h2>
        <Card style={{ maxWidth: '400px' }} padding="md">
          <h3 style={{ marginBottom: '16px', fontWeight: 900 }}>Update Profile</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input label="Full Name" defaultValue="Neo Brutalist" fullWidth />
            <Input label="Bio" placeholder="Tell us about yourself" fullWidth />
            <Input label="Website" prefix="https://" fullWidth />
          </div>
        </Card>
      </section>
    </div>
  );
};
