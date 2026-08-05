import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./MapComponent', () => () => null);
jest.mock('./Projects', () => () => null);

window.scrollTo = jest.fn();

test('renders the portfolio home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome to my page/i })).toBeInTheDocument();
});

test('renders the Peahi engineering case study', () => {
  window.history.pushState({}, '', '/blog/building-reliable-ai-underwriting');
  render(<App />);
  expect(screen.getByRole('heading', { name: /where ai stops and business rules begin/i })).toBeInTheDocument();
});
