import { fireEvent, render, screen } from '@testing-library/react';
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
  expect(screen.getByRole('img', { name: /central AI agent connected to planning/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /Deep Agents supervisor/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /MCP client manager/i })).toBeInTheDocument();
  expect(screen.getByText(/reduced the manual-intervention rate by 28 percent/i)).toBeInTheDocument();
});

test('moves SingHacks to Awards and opens all four recognitions from the menu', () => {
  window.history.pushState({}, '', '/extracurriculars');
  render(<App />);
  expect(screen.queryByText(/Singhacks 2025/i)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'menu' }));
  fireEvent.click(screen.getByRole('link', { name: 'Awards' }));

  expect(window.location.pathname).toBe('/awards');
  expect(screen.getByRole('heading', { name: 'Awards & recognition' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'SingHacks 2025' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /OpenAI × Sea Regional Codex Hackathon/ })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /NUS SoC Venture Initiation Programme/ })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'TinyFish Accelerator' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Read recognition post' })).toHaveAttribute('href', 'https://lnkd.in/p/gwPwpKVY');
  expect(screen.getByText('S$10,000 Award')).toBeInTheDocument();
  expect(screen.getByText(/One of 4 teams selected from 150/)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /Grand Winner award/ })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /Presenting Synthetic Shoppers/ })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Visit BrandCodes/ })).toHaveAttribute('href', 'https://brandcodes.io/');
});
