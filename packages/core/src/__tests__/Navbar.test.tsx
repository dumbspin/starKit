import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/Navbar';

describe('Navbar', () => {
  const links = [
    { key: '1', label: 'Home', href: '/' },
    { key: '2', label: 'About', onClick: vi.fn() },
    { key: '3', label: 'Contact', active: true, href: '/contact' },
  ];

  it('renders brand and links', () => {
    render(<Navbar brand={<span>StarKit</span>} links={links} />);
    expect(screen.getByText('StarKit')).toBeDefined();
    expect(screen.getAllByText('Home')[0]).toBeDefined();
    expect(screen.getAllByText('About')[0]).toBeDefined();
    expect(screen.getAllByText('Contact')[0]).toBeDefined();
  });

  it('renders href links as <a> tags', () => {
    render(<Navbar links={links} />);
    const homeLink = screen.getAllByText('Home')[0];
    expect(homeLink.tagName).toBe('A');
    expect(homeLink.getAttribute('href')).toBe('/');
  });

  it('renders onClick links as buttons', () => {
    render(<Navbar links={links} />);
    const aboutLink = screen.getAllByText('About')[0];
    expect(aboutLink.tagName).toBe('BUTTON');
    
    fireEvent.click(aboutLink);
    expect(links[1].onClick).toHaveBeenCalled();
  });

  it('applies active class to active links', () => {
    render(<Navbar links={links} />);
    const contactLink = screen.getAllByText('Contact')[0];
    expect(contactLink.className).toContain('brut-navbar__link--active');
  });

  it('renders actions slot', () => {
    render(<Navbar actions={<button>Login</button>} />);
    expect(screen.getAllByText('Login').length).toBeGreaterThan(0);
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    const { container } = render(<Navbar links={links} />);
    const hamburger = container.querySelector('.brut-navbar__hamburger')!;
    
    expect(hamburger.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(hamburger);
    expect(hamburger.getAttribute('aria-expanded')).toBe('true');
  });
});
