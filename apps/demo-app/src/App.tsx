import { useState } from 'react';
import { Button, Input, Card, Badge, Accordion } from 'starkit';
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

  const faqItems = [
    {
      key: '1',
      label: 'What is Neo-Brutalism?',
      content: 'Neo-brutalism is a design style that embraces raw, unpolished elements. It features high-contrast colors, bold borders, and hard shadows, moving away from the soft gradients and rounded corners of typical modern UI.',
    },
    {
      key: '2',
      label: 'Is StarKit production ready?',
      content: 'Yes! StarKit components are built with React and are fully accessible, following ARIA guidelines. It includes essential patterns like focus traps for modals and keyboard navigation for tabs.',
    },
    {
      key: '3',
      label: 'Can I use it with Tailwind?',
      content: 'Absolutely. While StarKit provides its own CSS variables, you can easily map them to your Tailwind config or use StarKit components alongside Tailwind utility classes.',
    },
  ];

  return (
    <div className="starkit brut-container">
      <header className="app-header">
        <h1 className="app-title">⚡ StarKit Demo</h1>
        <p className="app-subtitle">Production-ready neo-brutalist components.</p>
      </header>

      <div className="brut-grid brut-grid--sidebar">
        <div className="registration-section">
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

          <section className="faq-section" style={{ marginTop: '48px' }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <Accordion items={faqItems} bordered size="lg" />
          </section>

          <section className="suggestions-section" style={{ marginTop: '48px' }}>
            <Card padding="lg" variant="filled" style={{ background: 'var(--brut-blue)', color: 'var(--brut-white)' }}>
              <h2 style={{ fontWeight: 900, marginBottom: '8px', color: 'inherit' }}>Have an idea?</h2>
              <p style={{ marginBottom: '24px', opacity: 0.9 }}>Send us your suggestions or new component ideas!</p>
              
              {/* Formspree integration for easy email delivery */}
              <form 
                action="https://formspree.io/f/xeevdplb" 
                method="POST" 
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <Input 
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  fullWidth
                  required
                  style={{ background: 'var(--brut-white)', color: 'var(--brut-black)' }}
                />
                <Input 
                  name="suggestion"
                  placeholder="What should we add next?"
                  fullWidth
                  required
                  style={{ background: 'var(--brut-white)', color: 'var(--brut-black)' }}
                />
                <Button variant="outline" type="submit" style={{ background: 'var(--brut-black)', color: 'var(--brut-white)' }}>
                  Send Suggestion
                </Button>
              </form>
            </Card>
          </section>
        </div>

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
