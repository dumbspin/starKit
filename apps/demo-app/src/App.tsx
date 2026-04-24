import { useState } from 'react';
import { Button, Input, Card, Badge } from 'starkit';
import 'starkit/styles';

function App() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  return (
    <div className="starkit" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '8px' }}>⚡ StarKit Demo</h1>
        <p style={{ opacity: 0.7 }}>Production-ready neo-brutalist components.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '32px' }}>
        <section>
          <Card padding="lg">
            <h2 style={{ fontWeight: 900, marginBottom: '24px' }}>Registration Form</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Input 
                label="Full Name" 
                placeholder="John Doe" 
                fullWidth 
                required 
              />
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="john@example.com" 
                fullWidth 
                required 
                hint="We'll send a confirmation link."
              />
              <Input 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                fullWidth 
                required 
              />
              
              <div style={{ marginTop: '12px' }}>
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  loading={loading}
                  fullWidth
                >
                  {submitted ? 'Success!' : 'Create Account'}
                </Button>
              </div>
            </form>
          </Card>
        </section>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Card variant="inset" padding="md">
            <h3 style={{ fontWeight: 900, fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase' }}>
              System Status
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px' }}>API Server</span>
                <Badge variant="success" dot>Online</Badge>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px' }}>Database</span>
                <Badge variant="success" dot>Stable</Badge>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px' }}>Auth Service</span>
                <Badge variant="info">Maintenance</Badge>
              </div>
            </div>
          </Card>

          <Card variant="flat" padding="md">
            <h3 style={{ fontWeight: 900, fontSize: '14px', marginBottom: '8px' }}>Recent Activity</h3>
            <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '16px' }}>
              Your profile was updated 2 hours ago.
            </p>
            <Button variant="outline" size="sm" fullWidth>View All Activity</Button>
          </Card>

          <Card padding="md" onClick={() => alert('Upgrade clicked!')}>
             <Badge variant="danger" size="sm" style={{ marginBottom: '8px' }}>Pro Plan</Badge>
             <h3 style={{ fontWeight: 900, fontSize: '16px', marginBottom: '4px' }}>Upgrade to StarKit+</h3>
             <p style={{ fontSize: '13px', opacity: 0.8 }}>Get access to premium brutalist components.</p>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default App;
