import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('lenis', () => {
  const LenisMock = function () {
    return {
      raf: jest.fn(),
      destroy: jest.fn(),
    };
  };

  return {
    __esModule: true,
    default: LenisMock,
  };
});

test('renders the intro heading', () => {
  render(<App />);
  expect(screen.getByText(/hi, i['’]m aren aguila/i)).toBeInTheDocument();
});
