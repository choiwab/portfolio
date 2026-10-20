import { fireEvent, render, screen } from '@testing-library/react';
import Projects from './Projects';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}), { virtual: true });
jest.mock('swiper/modules', () => ({ Navigation: {} }), { virtual: true });
jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/navigation', () => ({}), { virtual: true });

test('shows AegisAI with its demo and accelerator link, then preserves other project links', () => {
  render(<Projects />);
  expect(screen.getByRole('heading', { name: 'AegisAI' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Video Demo' })).toHaveAttribute('href', 'https://youtu.be/AUiwShzJlwY');
  expect(screen.getByRole('link', { name: 'TinyFish Accelerator' })).toHaveAttribute('href', 'https://www.tinyfish.ai/accelerator');
  expect(screen.getByRole('link', { name: 'Read recognition post' })).toHaveAttribute('href', 'https://lnkd.in/p/gwPwpKVY');
  expect(screen.queryByRole('link', { name: 'GitHub Repository' })).not.toBeInTheDocument();
  expect(screen.getAllByRole('img', { name: /AegisAI screenshot/ })).toHaveLength(5);

  fireEvent.click(screen.getByRole('button', { name: 'Leet 99' }));
  expect(screen.getByRole('heading', { name: 'Leet 99' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'GitHub Repository' })).toHaveAttribute('href', 'https://github.com/Tien-Cheng/leetcode-99');
  expect(screen.queryByRole('link', { name: 'TinyFish Accelerator' })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'Read recognition post' })).not.toBeInTheDocument();
});
