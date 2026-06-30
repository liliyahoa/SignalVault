// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SignalVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SignalVault/i);
    expect(titleElement).toBeInTheDocument();
});
