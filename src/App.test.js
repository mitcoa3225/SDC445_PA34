import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the State and Hooks application', () => {
  render(<App />);
  expect(screen.getByText(/State and Hooks/i)).toBeInTheDocument();
});

test('increments and resets the counter', () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole('button', { name: /increment/i })
  );

  expect(
    screen.getByText(/Current Count: 1/i)
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole('button', { name: /reset/i })
  );

  expect(
    screen.getByText(/Current Count: 0/i)
  ).toBeInTheDocument();
});

test('displays text entered in the form input', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Enter text/i);

  fireEvent.change(input, {
    target: { value: 'React GitHub' }
  });

  expect(
    screen.getByText(/Entered Text: React GitHub/i)
  ).toBeInTheDocument();
});

test('adds and removes a todo item', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/Enter todo item/i);

  fireEvent.change(input, {
    target: { value: 'Push project to GitHub' }
  });

  fireEvent.click(
    screen.getByRole('button', { name: /add todo/i })
  );

  expect(
    screen.getByText('Push project to GitHub')
  ).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole('button', { name: /remove/i })
  );

  expect(
    screen.queryByText('Push project to GitHub')
  ).not.toBeInTheDocument();
});