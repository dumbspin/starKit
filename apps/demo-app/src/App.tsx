import { useState } from 'react';
import { Button, Input, Card, Badge } from 'starkit';
import 'starkit/styles';
import './App.css';

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
    <div className="starkit brut-container">
      <header className="app-header">
        <h1 className="app-title">⚡ StarKit Demo</h1>
        <p className="app-subtitle">Production-ready neo-brutalist components.</p>
      </header>

      <div className="brut-grid brut-grid--sidebar">
        <section className="registration-section">
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

        <aside className="status-sidebar">
          <Card variant="inset" padding="md">
            <h3 style={{ fontWeight: 900, fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase' }}>
              System Status
            </h3>
            <div className="brut-stack" style={{ gap: '12px' }}>
              <div className="brut-flex-row" style={{ flexDirection: 'row', alignItems: 'center' }}>
                <span style={{ fontSize: '14px' }}>API Server</span>
                <Badge variant="success" dot>Online</Badge>
              </div>
              <div className="brut-flex-row" style={{ flexDirection: 'row', alignItems: 'center' }}>
                <span style={{ fontSize: '14px' }}>Database</span>
                <Badge variant="success" dot>Stable</Badge>
              </div>
              <div className="brut-flex-row" style={{ flexDirection: 'row', alignItems: 'center' }}>
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
