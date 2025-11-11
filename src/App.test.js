import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list title', () => {
  render(<App />);
  const titleElement = screen.getByText(/lista de tarea/i);
  expect(titleElement).toBeInTheDocument();
});
