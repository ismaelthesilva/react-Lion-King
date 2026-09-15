import { render, screen } from '@testing-library/react';
import App from './App';

test('renders newsletter subscribe form', () => {
  render(<App />);
  const heading = screen.getByText(/subscribe to our newsletter/i);
  expect(heading).toBeInTheDocument();
});
