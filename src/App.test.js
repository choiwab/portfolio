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
  expect(screen.getByRole('heading', { name: /riding the agentic wave/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Pe’ahi was a workflow, not a chatbot/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /long-lived opportunity agent/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /Azure queue buffers long-running work/i })).toBeInTheDocument();
  expect(screen.queryByText(/What I can honestly claim/i)).not.toBeInTheDocument();
});

test('renders the Deep Agents and MCP field notes', () => {
  window.history.pushState({}, '', '/blog/deep-agents-mcp-harness');
  render(<App />);
  expect(screen.getByRole('heading', { name: /I gave the agent a harness/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /A harness is not a smarter model/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /Deep Agents supervisor/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /MCP client manager/i })).toBeInTheDocument();
  expect(screen.getByText(/reduced the manual-intervention rate by 28 percent/i)).toBeInTheDocument();
});
