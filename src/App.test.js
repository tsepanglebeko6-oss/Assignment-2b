import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the Lesotho home page', () => {
  render(<App />);
  expect(screen.getByText(/Discover Lesotho/i)).toBeInTheDocument();
});

test('navigates to attractions and filters by name', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getAllByRole('button', { name: 'Attractions' })[0]);
  expect(screen.getByText(/Attractions across Lesotho/i)).toBeInTheDocument();
  await user.type(screen.getByLabelText(/Search by name/i), 'Katse');
  expect(screen.getByRole('heading', { name: 'Katse Dam' })).toBeInTheDocument();
});
